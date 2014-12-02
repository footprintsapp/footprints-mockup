$(function() {
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var globalImageCounter = 1;

    var locations = ["July 2014", "August 2014", "September 2014", "October 2014", "November 2014"];

    var getNextImage = function() {
        if (globalImageCounter < 80) {
            return 'http://footprintsapp.github.io/footprints-img/mockup-scaled/JPEG/' + globalImageCounter++ + '.jpg';
        }
        else {
            return "assets/img/placeholder-100x100.gif";
        }
    }

    var nextThumbnail = function() {
        var nextThumbnailElement = $(document.createElement('div')).addClass("col-md-1 fp-gallery-image");
        // var thumbnailImage = $(document.createElement('img'));
        // thumbnailImage.attr({
        //     src: getNextImage(),
        //     width: "100%",
        //     height: "100%"
        // });
        // nextThumbnailElement.append(thumbnailImage);
        nextThumbnailElement.css('background-image', 'url(' + getNextImage() + ')');
        nextThumbnailElement.css('background-size', 'cover');
        return nextThumbnailElement;
    }

    locations.forEach(function(loc) {
        $('.fp-gallery-inject').append('<h3 class="fp-section-heading">' + loc + '</h3><div class="fp-gallery-section"></div>');
    });

    $('.fp-gallery-section').each(function() {
        for (var i = 0; i < getRandomInt(2, 5); i++) {
            var galleryRow = $(document.createElement('div')).addClass("row fp-gallery-row");
            for (var i = 0; i < 12; i++) {
                galleryRow.append(nextThumbnail());
            }
            $(this).append(galleryRow);
        }
        var partialGalleryRow = $(document.createElement('div')).addClass("row fp-gallery-row-partial");
        for (var i = 0; i < getRandomInt(3, 12); i++) {
            partialGalleryRow.append(nextThumbnail());
        }
        $(this).append(partialGalleryRow);
    });

    // $('.nailthumb-container').nailthumb({
    //     height: '100px'
    // });
});