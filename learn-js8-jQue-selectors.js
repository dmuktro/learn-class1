function main() {
  $('.projects').hide(); 
  $('.projects-button').on('click', 
    function() { $('.projects-button').toggleClass('active'); 
               $('.projects').toggle(); 
    });
}

$(document).ready(main);
