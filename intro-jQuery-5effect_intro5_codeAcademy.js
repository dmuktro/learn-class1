// https://www.codecademy.com/
$(document).ready(function() {
    $("___").css("___",'__');
});



//  https://www.codecademy.com/en/courses/web-beginner-en-jtFIC/0/5?
    $(document).ready(function(){
    $('div').click(function(){
        $(this).effect('slide');
    });
});


//  https://www.codecademy.com/courses/web-beginner-en-jtFIC/0/4?
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('bounce', {times:3}, 500);
    });
});


//  https://www.codecademy.com/courses/web-beginner-en-jtFIC/0/3?
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('explode');
    });
});


//  https://www.codecademy.com/courses/web-beginner-en-JwhI1/1/4?
$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'},500);
    });
});
