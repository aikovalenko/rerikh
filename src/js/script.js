$(document).ready(function() {

    var arrayOfIDs = $('[data-menuanchor]').map(function() { return $(this).data('menuanchor') }).get();

    $('#fullpage').fullpage({
        autoScrolling: true,
        css3: true,
        verticalCentered: true,
        scrollOverflow: true,
        controlArrows: false
    });
});