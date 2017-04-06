// https://www.codecademy.com/en/courses/web-beginner-en-v6phg/2/4?
//  create the variable toAdd and set it equal to the contents of the input field
//   and .append() a <div> with class="item" to the .list div of your HTML document
//    by adding the .on() event handler as described above. It should 
//    go inside your $(document).ready(), but after and outside your $('#button').click().
$(document).ready(function() {
    $('#button').on('click', function() {
		var toAdd = $('input[name=checkListItem]').val();
    });
});
