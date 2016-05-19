//= require jquery
//= require bootstrap-sprockets
//= require tree .

if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}

// Scroll function
// Some code thanks to Alex Devero
$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

// Icons appear on scroll
$(function(){
  var icons = document.querySelector('.icons')
  new Waypoint({
    element: document.querySelector("#services"),
    handler: function(direction) {
      if ( direction === "down") {
        icons.classList.add("is-active");
      }
    }
  });
  var projects = document.querySelector('.projects')
  new Waypoint({
    element: document.querySelector("#folio"),
    handler: function(direction) {
      if ( direction === "down") {
        projects.classList.add("is-active");
      }
    }
  });
});
