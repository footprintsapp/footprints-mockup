$(function() {
    var gallery = $("div").addClass("row");
    var galleryImage = $("div").addClass("col-md-1 fp-gallery-image");
    galleryImage.append($("img").attr("src", "http://placehold.it/100x100").attr("width", "100%").attr("height", "100%"));

    for (var i = 0; i < 12; i++) {
        gallery.append(galleryImage);
    }

    $('.fp-gallery-section').each(function() {
        $(this).append(gallery);
    });
});