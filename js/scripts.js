$(document).ready(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
      $(".navBar").addClass('shrink-nav');
      $("#line").fadeOut();
      $("#insta-logo").fadeOut();
      $(".stories img").removeClass("relativeStories");
      $(".stories img").addClass("fixedStories");
    } else {
      $(".navBar").removeClass('shrink-nav')
      $("#line").fadeIn();
      $("#insta-logo").fadeIn();
      $(".stories img").addClass("relativeStories");
      $(".stories img").removeClass("fixedStories");
    }
  })
})
