$(function() {
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Randomize array element order in-place.
     * Using Fisher-Yates shuffle algorithm.
     */
    var shuffleArray = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    var locations = ["July 2014", "August 2014", "September 2014", "October 2014", "November 2014"];

    locations.forEach(function(loc) {
        $('.fp-gallery-inject').append('<h3 class="fp-section-heading">' + loc + '</h3><div class="fp-gallery-section"></div>');
    });

    $('.fp-gallery-section').each(function() {
        for (var i = 0; i < getRandomInt(2, 5); i++) {
            $(this).append('<div class="row fp-gallery-row"></div>');
        }
        $(this).append('<div class="row fp-gallery-row-partial"></div>');
    });

    $('.fp-gallery-row').each(function() {
        for (var i = 0; i < 12; i++) {
            $(this).append('<div class="col-md-1 fp-gallery-image"><img src="assets/img/placeholder-100x100.gif" width="100%" height="100%" /></div>');
        }
    });

    $('.fp-gallery-row-partial').each(function() {
        for (var i = 0; i < getRandomInt(3, 12); i++) {
            $(this).append('<div class="col-md-1 fp-gallery-image"><img src="assets/img/placeholder-100x100.gif" width="100%" height="100%" /></div>');
        }
    });
});