/**
 * User: oskar
 * Date: 22.11.14
 * Time: 13:31
 */

$(function () {

  $(window).bind('hashchange', function(e){
    $('html').attr('class', window.location.hash.replace('#',''));
  });

  $(window).trigger('hashchange');

  $('html').addClass('js');
});
