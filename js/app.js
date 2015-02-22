(function (){
    "use strict";

    var imageUrls;
    var totalImages;
    var galleryEl;
    var galleryWidthPercent;
    var imageWidthPercent;
    var galleryTimer;
    var galleryTransitionDelay;
    var currentImageIndex;


    function init ()
    {
        galleryEl = document.querySelector(".gallery");
        imageUrls = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"];
        totalImages = imageUrls.length;

        // set percentage width for the gallery el based on the number of images.
        galleryWidthPercent = 100 * totalImages + "%";
        galleryEl.style.width = galleryWidthPercent;

        // create a variable for percentage width of image els based on the number of images.
        imageWidthPercent = 100 / totalImages + "%";

        galleryTransitionDelay = 4000;
        currentImageIndex = 0;

        createGalleryImages();
        setupTimer();
    }

    function createGalleryImages ()
    {
        // create images for each url and add them inside the gallery el.
        var i = 0;
        var currentUrl;
        
        for (i; i < totalImages; i++)
        {
            currentUrl = imageUrls[i];

            var image = new Image();
            image.className = "item";
            image.style.width = imageWidthPercent;
            image.src = currentUrl;

            galleryEl.appendChild(image);
        }
    }

    function setupTimer ()
    {
        galleryTimer = setInterval(transitionGallery, galleryTransitionDelay);
    }

    function transitionGallery ()
    {
        var galleryPosLeft;

        currentImageIndex++;
        
        // if we are on the last image then go back to the first
        if (currentImageIndex === totalImages)
        {
            currentImageIndex = 0;
            galleryPosLeft = 0;
        }
        else
        {
            // set a negative percentage value for the gallery el's 'left' style.
            galleryPosLeft = "-" + (currentImageIndex * 100) + "%";
        }

        galleryEl.style.left = galleryPosLeft;
    }

    document.addEventListener("DOMContentLoaded", init);
})();