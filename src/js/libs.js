//= ../libs/jquery/dist/jquery.min.js
//= ../libs/fullpage.js/dist/scrolloverflow.js
//= ../libs/fullpage.js/dist/jquery.fullpage.min.js
//= ../libs/modernizr/modernizr-custom.js
//= ../libs/fastclick/lib/fastclick.js
//= ../libs/platform.js

function truncate() {
    var truncate = $('p.truncate');

    truncate.each(function(){
        var text = $(this).text(),
            textLength = 254;
        if(text.length < textLength) return;

        $(this).html(
            text.slice(0,textLength) + '<span>... </span>'
        );

    });
}