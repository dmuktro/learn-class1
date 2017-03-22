// We can attach next to any jQuery selector to select the next direct element.
function main() {
  $('.projects').hide(); 
  $('.projects-button').on('click', 
    function() { $(this).next().toggle(); 
    });
}

$(document).ready(main);
