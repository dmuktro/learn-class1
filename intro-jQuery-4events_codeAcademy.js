// https://www.codecademy.com/
$(document).ready(function() {
    $("___").css("___",'__');
});



//  https://www.codecademy.com/courses/web-beginner-en-JwhI1/2/1?
$(document).ready(function(){
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left: "-=10px"},'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({top: "-=10px"},'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left: "+=10px"},'fast');
                break;
            // Down Arrow Pressed
            case 40:
                $('img').animate({top: "+=10px"},'fast');
                break;
        }    });
});


//  https://www.codecademy.com/courses/web-beginner-en-JwhI1/1/4?
$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'},500);
    });
});


//  https://www.codecademy.com/courses/web-beginner-en-JwhI1/1/3?
$(document).ready(function(){
    $('input').focus(function(){
        $('input').css('outline-color','#FF0000');
    });
});
