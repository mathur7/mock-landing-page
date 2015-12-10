$(document).ready(function(){
  var header = $('#slideshow');
  var images = ['url(images/hero_1015_ec.jpg)', 'url(images/hero_1015_gentshop.jpg)', 'url(images/story_1015_sorbet.jpg)' ];
  var currentIndex = 0;

  var previousIndex = function(currentIndex, length) {
    if (currentIndex <= 0) {
      return length - 1; // cycle backwards to the last image
    } else {
      return currentIndex - 1;
    }
  }

  var nextIndex = function(currentIndex, length) {
    return ((currentIndex + 1) % length)
  };

  // Left arrow selector
  $('.left-arrow-container').click(function () {
    currentIndex = previousIndex(currentIndex, images.length);
    header.css({
      'background-image' : images[currentIndex],
      'transition': 'background 2s ease'
    });
  });

  // Right arrow selector
  $('.right-arrow-container').click(function(){
    currentIndex = nextIndex(currentIndex, images.length);
    header.css({
      'background-image' : images[currentIndex],
      'transition': 'background 2s ease'
    });
  });


})
