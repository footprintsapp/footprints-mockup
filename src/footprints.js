$(function() {
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var globalImageCounter = 0;

    var locations = ["July 2014", "August 2014", "September 2014", "October 2014", "November 2014"].reverse();

    var getNextImage = function() {
        var imageObject = {};

        if (globalImageCounter < 79) {
            imageObject.thumb = 'http://footprintsapp.github.io/footprints-img/mockup-scaled/JPEG/' + ++globalImageCounter + '.jpg';
            imageObject.full = 'http://footprintsapp.github.io/footprints-img/mockup/' + globalImageCounter + '.JPG';
        }
        else {
            imageObject.thumb = "assets/img/placeholder-logo.png";
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
            // imageLightbox.attr('rel', 'lightbox-all');
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
        for (var i = 0; i < getRandomInt(3, 10); i++) {
            partialGalleryRow.append(nextThumbnail());
        }

        $(this).append(partialGalleryRow);
    });

    /*
    *    UPLOADING
    */
    // remove the list of uploaded files (success indicators) when the upload modal is closed
    $('#uploadPicturesModal').on('hidden.bs.modal', function () {
        $('#upload-file-status-list').empty();
    })

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var uploadedFiles = [];

    var startUpload = function(files) {
        for (var i = 0; i < files.length; i++) {
            $('#upload-file-status-list').append('<a href="#" class="list-group-item list-group-item-success"><span class="badge alert-success pull-right">Success</span>' + files[i].name + '</a>');
            uploadedFiles.push(files[i]);
        }

        console.log(files);

        $('.modal-body .js-upload-finished').show();

        if ($('#fp-upload-section').length == 0) {
            $('.fp-gallery-inject').prepend('<h3 class="fp-section-heading">December 2014</h3><div class="fp-gallery-section" id="fp-upload-section"></div>');
        }

        // redraw the rows
        $('#fp-upload-section').empty();
        var currentRow;

        for (var i = 0; i < uploadedFiles.length; i++) {
            var cur = uploadedFiles[i];

            if ((i % 10) == 0) { // start a new row
                currentRow = $(document.createElement('div')).addClass("row fp-gallery-row");
                $('#fp-upload-section').append(currentRow);
            }

            var reader = new FileReader();
            reader.onloadend = function(event) {
                // console.log(event);
                var dataURL = event.target.result;
                // dataURL = dataURL.substring(dataURL.indexOf('base64,'));

                var newImage = $(document.createElement('div')).addClass("square fp-gallery-image");
                newImage.css('background-image', 'url(' + dataURL + ')');
                
                var imageLightbox = $(document.createElement('a'));
                imageLightbox.attr('href', dataURL);
                imageLightbox.attr('data-lightbox', 'all-group');
                imageLightbox.append(newImage);

                $(currentRow).append(imageLightbox);
            }

            var blob = new Blob( [cur.slice()], { type: cur.type } ); // WOW THIS WAS HARD TO FIGURE OUT
            reader.readAsDataURL(blob);
        }
    }

    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault();
        startUpload(uploadFiles);
    })

    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files);
    }

    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }

});