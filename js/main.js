
// nav

$(window).scroll(function(){
  var offsetTop = $(window).scrollTop();
  
  if (offsetTop >= 200) {
    $('nav').css({
      'background-color' :'rgba(255,255, 255, 0.9)'  ,
      'box-shadow' : '-4px -3px 10px black'
    })
    $('.navbar-nav .nav-link.active, .navbar-nav .show>.nav-link').css('color' , 'black');
  } else {
    $('nav').css({
      'background-color' :'rgba(0,0, 0, 0.1)'  ,
      'box-shadow' : 'none'
    })
    $('.navbar-nav .nav-link.active, .navbar-nav .show>.nav-link').css('color' , 'white');
  }

})

// end nav

// start about company section

$('section#our-products .first-row img').click(function(){
  var imgSrc = $(this).attr('src');
  $('.big-picture').fadeIn(1000).attr('src' , imgSrc);
})

$(document).click(function(e){
  if(!$(e.target).is('img')){
    $('.big-picture').fadeOut(1000);
  }
})