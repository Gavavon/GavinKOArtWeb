<#
.SYNOPSIS
    Generates compressed JPEG gallery thumbnails from the full-resolution
    paintings in assets\Art.

.DESCRIPTION
    Scans assets\Art for image files (.png, .jpg, .jpeg), resizes each to a
    max edge of 700px (preserving aspect ratio, never upscaling) at JPEG
    quality 90, and writes the result to assets\Art\thumbs\<name>.jpg. This
    matches the "thumb" field format used in assets\js\art-database.js.

    Existing thumbnails are skipped unless -Force is passed or the source
    image is newer than its current thumbnail.

.PARAMETER Force
    Regenerate every thumbnail, even ones that already look up to date.

.PARAMETER MaxEdge
    Longest edge of the generated thumbnail, in pixels. Default 700.

.PARAMETER Quality
    JPEG quality, 1-100. Default 90.

.EXAMPLE
    .\scripts\generate-thumbnails.ps1
    Generates thumbnails only for new/updated paintings.

.EXAMPLE
    .\scripts\generate-thumbnails.ps1 -Force
    Regenerates every thumbnail from scratch.

.NOTES
    After running, add a "thumb": "assets/Art/thumbs/<name>.jpg" field for
    any new painting's entry in assets\js\art-database.js (alongside its
    existing "image" field, which should keep pointing at the full-res
    original in assets\Art).
#>
param(
    [switch]$Force,
    [int]$MaxEdge = 700,
    [int]$Quality = 90
)

$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$artDir = Resolve-Path (Join-Path $scriptDir "..\assets\Art")
$thumbsDir = Join-Path $artDir "thumbs"

if (-not (Test-Path $thumbsDir)) {
    New-Item -ItemType Directory -Path $thumbsDir | Out-Null
}

Add-Type -AssemblyName System.Drawing

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$Quality)

$sourceImages = Get-ChildItem -Path $artDir -File | Where-Object { $_.Extension -match '^\.(png|jpe?g)$' }

$generated = 0
$skipped = 0
$newEntries = @()

foreach ($file in $sourceImages) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $outPath = Join-Path $thumbsDir "$baseName.jpg"
    $isNew = -not (Test-Path $outPath)

    if (-not $Force -and -not $isNew -and (Get-Item $outPath).LastWriteTime -ge $file.LastWriteTime) {
        $skipped++
        continue
    }

    $src = [System.Drawing.Image]::FromFile($file.FullName)
    try {
        $ratio = [math]::Min([math]::Min($MaxEdge / $src.Width, $MaxEdge / $src.Height), 1)
        $newW = [int]([math]::Round($src.Width * $ratio))
        $newH = [int]([math]::Round($src.Height * $ratio))

        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        try {
            $bmp.SetResolution($src.HorizontalResolution, $src.VerticalResolution)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            try {
                $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $g.DrawImage($src, 0, 0, $newW, $newH)
            } finally {
                $g.Dispose()
            }
            $bmp.Save($outPath, $jpegCodec, $encParams)
        } finally {
            $bmp.Dispose()
        }
    } finally {
        $src.Dispose()
    }

    $generated++
    if ($isNew) {
        $newEntries += "$($file.Name) -> assets/Art/thumbs/$baseName.jpg"
    }

    $origKB = [math]::Round($file.Length / 1KB, 0)
    $newKB = [math]::Round((Get-Item $outPath).Length / 1KB, 0)
    Write-Host "Generated $($file.Name) -> thumbs\$baseName.jpg  (${origKB}KB -> ${newKB}KB, ${newW}x${newH})"
}

Write-Host ""
Write-Host "Done. $generated thumbnail(s) generated, $skipped already up to date."

if ($newEntries.Count -gt 0) {
    Write-Host ""
    Write-Host "New thumbnails were created for images not seen before:"
    $newEntries | ForEach-Object { Write-Host "  $_" }
    Write-Host ""
    Write-Host 'Add a "thumb": "assets/Art/thumbs/<name>.jpg" field to each new painting''s entry in assets\js\art-database.js.'
}
