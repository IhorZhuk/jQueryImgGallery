(function($) {
  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay = $('.overlay'),
      liIndex;
  
  //preload images
  var imgSources = [
  'images/img-1-lg.jpg',
  'images/img-2-lg.jpg',
  'images/img-3-lg.jpg',
  'images/img-4-lg.jpg'
  ];

  var imgs = [];
  for (var i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }

  function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
  }

  function closeLigtbox() {
    $lightbox.fadeOut();
  }

  $overlay.click(closeLigtbox);

  $links.click(function(e) {
    e.preventDefault();
    var imgSrc = $(this).attr('href');
    liIndex = $(this).parent().index();
    replaceImg(imgs[liIndex].src);
    $lightbox.fadeIn();
  });

   $next.click( function() {  
    if ( (liIndex + 1) < $li.length ) { 
      liIndex ++;
    } else {
      liIndex = 0;
    }
    replaceImg(imgs[liIndex].src);
  });

   $prev.click( function() {  
    if ( (liIndex) > 0 ) {    
      liIndex --;
    } else {
      liIndex = $li.length - 1;
    }
    replaceImg(imgs[liIndex].src);
  });
  
})(jQuery);
