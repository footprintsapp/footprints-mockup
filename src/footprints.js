$(function() {
    var gallery = $("div").addClass("row");
    var gallery-image = $("div").addClass("col-md-1 fp-gallery-image");
    gallery-image.append($("img").attr("src", "http://placehold.it/100x100").attr("width", "100%").attr("height", "100%"));
    
    for (int i = 0; i < 12; i++) {
        gallery.append(gallery-image);
    }

    $('.fp-gallery-section').each(function() {
        $(this).append(gallery);
    });
});