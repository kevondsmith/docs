$(document).ready(function () {

    // Make entire card clickable
    $(".location-card").on("click", function () {
        const url = $(this).data("url");
        window.location.href = url;
    });

    // Keyboard accessibility
    $(".location-card").attr("tabindex", "0");

    $(".location-card").on("keypress", function (e) {
        if (e.key === "Enter") {
            $(this).click();
        }
    });

});