$(document).ready(function() {
    if($(window).width() < 515) {
        $("#img").attr("src", "images/mobile/image-transform.jpg");
    } else {
        $("#img").attr("src", "images/desktop/image-transform.jpg");
    }
}); 