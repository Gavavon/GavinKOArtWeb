$(document).ready(function() {

    // The painting database now lives in art-database.js (loaded before this file)

    // The Logic - Using Event Delegation for dynamically loaded HTML
    $(document).on('show.bs.modal', '#lightboxModal', function (event) {
        
        // event.relatedTarget is the specific <a> tag that triggered the modal
        var $clickedThumbnail = $(event.relatedTarget);
        
        // Prefer the explicit data-filename set by gallery-loader.js (works even
        // when the thumbnail's own <img> points at a downscaled thumb copy);
        // fall back to parsing the clicked <img>'s src for hand-written thumbnails.
        var clickedImgSrc = $clickedThumbnail.find('img').attr('src');
        var fileName = $clickedThumbnail.attr('data-filename') || (clickedImgSrc ? clickedImgSrc.split('/').pop() : '');

        // Extract the title text from the <span class="title"> inside the clicked link
        var imageTitle = $clickedThumbnail.find('.title').text();

        // Fallback title just in case the span is empty or missing
        if (!imageTitle) {
            imageTitle = "Artwork Details";
        }

        // Look up the extracted filename in our database
        var artEntry = artDatabase[fileName];
        var awardText = artEntry && artEntry.award;

        // Always show the full-resolution original in the modal, even if the
        // thumbnail that was clicked used a downscaled copy for speed.
        var fullImgSrc = (artEntry && artEntry.image) || clickedImgSrc;

        // Fallback text if the image isn't listed
        if (!awardText) {
            awardText = "No award information available for this piece.";
        }

        // Build the date/size line, e.g. "October 28, 2025 ~ 11"x14""
        var detailsText = "";
        if (artEntry && (artEntry.date || artEntry.size)) {
            detailsText = [artEntry.date, artEntry.size].filter(Boolean).join(" ~ ");
        }

        // Find the modal itself and update the content
        var $modal = $(this);
        $modal.find('#lightboxImage').attr('src', fullImgSrc);
        $modal.find('#lightboxTitle').text(imageTitle); // Inject the dynamic title
        $modal.find('#lightboxDetails').text(detailsText);
        $modal.find('#lightboxText').text(awardText);
    });

    // Clear the modal content when it closes so it resets cleanly
    $(document).on('hidden.bs.modal', '#lightboxModal', function () {
        var $modal = $(this);
        $modal.find('#lightboxImage').attr('src', '');
        $modal.find('#lightboxTitle').text('Award Information'); // Reset the title
        $modal.find('#lightboxDetails').text('');
        $modal.find('#lightboxText').text('');
    });
});