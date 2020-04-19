// function preload(arrayOfImages) {
//   $(arrayOfImages).each(function(){
//       $('<img/>')[0].src = this;
//       // Alternatively you could use:
//       // (new Image()).src = this;
//   });
// }

// // Usage:

// preload([
//   'p1.jpg',
//   'p2.jpg',
//   'p3.jpg', 
//   'p4.jpg',
//   'p5.jpg',
//   'p6.jpg'
// ]);

$.fn.preload = function() {
  this.each(function(){
      $('<img/>')[0].src = this;
  });
}

// Usage:

$(['p1.jpg','p2.jpg','p3.jpg', 'p4.jpg','p5.jpg','p6.jpg']).preload();