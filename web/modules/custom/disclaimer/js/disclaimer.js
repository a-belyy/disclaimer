(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.cookiesBox = {
    attach: function (context, settings) {

      var cookie = Cookies.get('cookieBox');

      if (cookie && cookie === drupalSettings.nodeId) {
        $('.cookie-block').remove();
      } else {
        $('.cookie-block').show();
      }

      $('#cookies-btn').click(function () {
        Cookies.set('cookieBox', drupalSettings.nodeId, { expires: 30, path: '' });
        $('.cookie-block').remove();
      })

    }
  };
})(jQuery, Drupal, drupalSettings);
