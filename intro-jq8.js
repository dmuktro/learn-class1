//  https://www.codecademy.com/en/courses/web-beginner-en-GfjC6/1/4?
//  Let's use a compound selector to apply a fadeTo() to both the .pink and .red selectors.

$(document).ready(function() {
    $('button').click(function() {
        $('.pink, .red').fadeOut('slow');
    });
});
