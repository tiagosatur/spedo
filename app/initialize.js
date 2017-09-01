// var jade = require('jade-brunch');
// var style = require('stylus-brunch');

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');

  $('.slider-container').cycle({
    pager: '.slider-nav',
    next: '.slider-arrow__left',
    prev: '.slider-arrow__right'
  });

});
