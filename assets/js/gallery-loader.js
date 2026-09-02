/**
 * gallery-loader.js
 * Builds painting thumbnail grids from artDatabase (assets/js/art-database.js)
 * instead of hand-written HTML:
 *  - #fullGallery on gallery.html: the entire database, newest first
 *  - #recentWorks on index.html: the 6 most recently added paintings
 */
$(document).ready(function() {

    function renderThumbnail(fileName) {
        var art = artDatabase[fileName];
        if (!art) {
            return null;
        }

        var $item = $('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"></div>');

        // data-filename lets modal-handler.js look the painting up in artDatabase
        // directly, so it can load the full-resolution original rather than
        // whatever (possibly downscaled) image src the thumbnail itself used.
        var $thumbnail = $('<a class="thumbnail" data-toggle="modal" data-target="#lightboxModal"></a>').attr('data-filename', fileName);
        var $img = $('<img>').attr('src', art.thumb || art.image).attr('alt', '').attr('loading', 'lazy').attr('decoding', 'async');
        $thumbnail.append($('<span class="img"></span>').append($img));
        $thumbnail.append($('<span class="title"></span>').text(art.title));
        $thumbnail.append('<h4></h4>');

        $item.append($thumbnail);
        $item.append('<h4></h4>');
        $item.append('<p></p>');

        return $item;
    }

    function renderGrid($container, fileNames) {
        fileNames.forEach(function(fileName) {
            var $item = renderThumbnail(fileName);
            if ($item) {
                $container.append($item);
            }
        });
    }

    // Full gallery: the entire database, newest first
    var $fullGallery = $('#fullGallery');
    if ($fullGallery.length) {
        var allFileNames = Object.keys(artDatabase).reverse();
        renderGrid($fullGallery, allFileNames);
        setupMasonry($fullGallery);
    }

    // Recent works: the last 6 entries in artDatabase (most recently added), newest first
    var $recentWorks = $('#recentWorks');
    if ($recentWorks.length) {
        var recentFileNames = Object.keys(artDatabase).slice(-3).reverse();
        renderGrid($recentWorks, recentFileNames);
    }

    // Masonry packing for #fullGallery only: sizes each item's CSS grid row-span
    // to its actual rendered height, so shorter neighbors pull up into the gap
    // a taller image would otherwise leave. Scoped to #fullGallery so it can't
    // affect #recentWorks or any other page.
    function layoutMasonry($container) {
        var grid = $container.get(0);
        var style = window.getComputedStyle(grid);
        var rowHeight = parseInt(style.getPropertyValue('grid-auto-rows'), 10) || 1;
        var rowGap = parseInt(style.getPropertyValue('row-gap'), 10) || parseInt(style.getPropertyValue('grid-row-gap'), 10) || 0;

        $container.children().each(function() {
            var content = this.querySelector('.thumbnail');
            if (!content) {
                return;
            }
            var rowSpan = Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
            this.style.gridRowEnd = 'span ' + rowSpan;
        });
    }

    function setupMasonry($container) {
        var relayout = function() { layoutMasonry($container); };

        $container.find('img').each(function() {
            if (this.complete) {
                relayout();
            } else {
                $(this).on('load', relayout);
            }
        });

        // Web fonts (Google Fonts) can finish loading after the initial layout
        // and change how the title text wraps/how tall it is; relayout once
        // they're ready so the row-span isn't sized off the fallback font.
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(relayout);
        }

        $(window).on('load', relayout);
        $(window).on('resize', relayout);
        relayout();
    }
});
