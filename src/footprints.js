$(function() {
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var globalImageCounter = 1;

    var locations = ["July 2014", "August 2014", "September 2014", "October 2014", "November 2014"];

    var getNextImage = function() {
        var imageObject = {};

        if (globalImageCounter < 80) {
            imageObject.thumb = 'http://footprintsapp.github.io/footprints-img/mockup-scaled/JPEG/' + globalImageCounter++ + '.jpg';
            imageObject.full = 'http://footprintsapp.github.io/footprints-img/mockup/' + globalImageCounter + '.JPG';
        }
        else {
            imageObject.thumb = "assets/img/placeholder-100x100.gif";
        }

        return imageObject;
    }

    var nextThumbnail = function() {
        var image = getNextImage();

        var nextThumbnailElement = $(document.createElement('div')).addClass("square fp-gallery-image");
        nextThumbnailElement.css('background-image', 'url(' + image.thumb + ')');

        if (typeof(image.full) !== 'undefined') {
            var imageLightbox = $(document.createElement('a'));
            imageLightbox.attr('href', image.full);
            imageLightbox.attr('data-lightbox', 'all-group');
            imageLightbox.append(nextThumbnailElement);
            nextThumbnailElement = imageLightbox;
        }

        return nextThumbnailElement;
    }

    locations.forEach(function(loc) {
        $('.fp-gallery-inject').append('<h3 class="fp-section-heading">' + loc + '</h3><div class="fp-gallery-section"></div>');
    });

    $('.fp-gallery-section').each(function() {
        for (var i = 0; i < getRandomInt(2, 3); i++) {
            var galleryRow = $(document.createElement('div')).addClass("row fp-gallery-row");
            for (var j = 0; j < 10; j++) {
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
});