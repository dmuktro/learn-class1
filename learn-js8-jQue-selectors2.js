function main() {
  $('.projects').hide(); 
  $('.projects-button').on('click', 
    function() { $(this).toggleClass(); 
    });
}

$(document).ready(main);
