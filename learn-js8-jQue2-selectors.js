// We can attach next to any jQuery selector to select the next direct element.
// jQuery provides a method named slideToggle that can animate an element's entrance and exit. 

function main() {
  $('.projects').hide(); 
  $('.projects-button').on('click', 
    function() { 
//      $(this).next().toggle(); 
      $(this).text('Projects reViewed');
      $(this).next().slideToggle(700);
    });
}

$(document).ready(main);
