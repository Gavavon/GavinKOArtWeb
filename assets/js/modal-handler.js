$(document).ready(function() {
    
    // 1. The Database
    var awardDatabase = {
        "s1.jpg": "Winner of the 2025 Best Abstract Art Award. Exhibited globally.",
        "s2.jpg": "Gold Medal for Visual Design at the 2024 Creative Expo.",
        "s3.jpg": "Recognized for Outstanding Composition by the Arts Council.",
        "s4.jpg": "First Place: Digital Media Category."
    };

    // 2. The Logic - Using Event Delegation for dynamically loaded HTML
    $(document).on('show.bs.modal', '#lightboxModal', function (event) {
        
        // event.relatedTarget is the specific <a> tag that triggered the modal
        var $clickedThumbnail = $(event.relatedTarget);
        
        // Get the full image source
        var fullImgSrc = $clickedThumbnail.find('img').attr('src');
        
        // Extract the title text from the <span class="title"> inside the clicked link
        var imageTitle = $clickedThumbnail.find('.title').text();
        
        // Fallback title just in case the span is empty or missing
        if (!imageTitle) {
            imageTitle = "Artwork Details";
        }
        
        // Extract just the filename (e.g., "s1.jpg")
        var fileName = fullImgSrc.split('/').pop();
        
        // Look up the extracted filename in our database
        var awardText = awardDatabase[fileName];
        
        // Fallback text if the image isn't listed
        if (!awardText) {
            awardText = "No award information available for this piece.";
        }

        // Find the modal itself and update the content
        var $modal = $(this);
        $modal.find('#lightboxImage').attr('src', fullImgSrc); 
        $modal.find('#lightboxTitle').text(imageTitle); // Inject the dynamic title
        $modal.find('#lightboxText').text(awardText);
    });
    
    // Clear the modal content when it closes so it resets cleanly
    $(document).on('hidden.bs.modal', '#lightboxModal', function () {
        var $modal = $(this);
        $modal.find('#lightboxImage').attr('src', '');
        $modal.find('#lightboxTitle').text('Award Information'); // Reset the title
        $modal.find('#lightboxText').text('');
    });
});