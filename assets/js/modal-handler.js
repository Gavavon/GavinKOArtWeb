$(document).ready(function() {
    
    // 1. The Database
    var awardDatabase = {
        "AGrassyBlend.png": "This painting sold for $100 USD and is now privately owned",
        "Blood.png": "No current information",
        "ConfettiConnections.png": "This painting sold for $75 USD and is now privately owned",
        "Depression.png": "No current information",
        "GalaxyInGloss.png": "This painting sold for $50 USD and is now privately owned",
        "NotInMySubway.png": "This painting was gifted and is now privately owned",
        "Poison.png": "No current information",
        "Violence.png": "No current information",
        "s1.jpg": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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