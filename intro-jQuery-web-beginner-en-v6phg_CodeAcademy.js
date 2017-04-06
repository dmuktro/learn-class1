// https://www.codecademy.com/en/courses/web-beginner-en-v6phg/2/4?
//  create the variable toAdd and set it equal to the contents of the input field
$(document).ready(function() {
    $('#button').on('click', function() {
		var toAdd = $('input[name=checkListItem]').val();
    });
});
