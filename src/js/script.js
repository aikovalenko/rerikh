$(document).ready(function() {
    $("html").addClass(platform.name.toLowerCase());
    $("html").addClass(platform.os.family.toLowerCase());
    var arrayOfIDs = $('[data-menuanchor]').map(function() { return $(this).data('menuanchor') }).get();

    $('#fullpage').fullpage({
        autoScrolling: true,
        css3: true,
        anchors:['0', '1'],
        scrollingSpeed: 1200,
        verticalCentered: true,
        scrollOverflow: true,
        controlArrows: false,
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this),
                portrait = $(".section--intro");


            //after leaving section 2
            if(index == 1 && direction =='down'){
                portrait.addClass("portrait-parallax");
            }

            else if(index == 2 && direction == 'up'){
                portrait.removeClass("portrait-parallax");
            }
        }
    });

    truncate();
});