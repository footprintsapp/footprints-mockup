$(function() {
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('.fp-gallery-section').each(function() {
        for (var i = 0; i < getRandomInt(2, 5); i++) {
            $(this).append('<div class="row fp-gallery-row"></div>');
        }
    });

    $('.fp-gallery-row').each(function() {
        for (var i = 0; i < 12; i++) {
            $(this).append('<div class="col-md-1 fp-gallery-image"><img src="assets/img/placeholder-100x100.gif" width="100%" height="100%" /></div>');
        }
    });
});