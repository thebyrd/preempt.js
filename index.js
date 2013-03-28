$(document).ready(function () {
  $.each($('a'), function (idx, a) {

    if (!localStorage[a.href]) {

      $.get(a.href, function (html) {
        var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im
        var body = pattern.exec(html)[0];
        localStorage[a.href] = body.toString();
      });
    
    }
  });


  $('a').click(function (e) {
    var cachedPage = localStorage[e.target.href];
    if (cachedPage) {
      e.preventDefault();
      $('body').html(cachedPage);
    }

  });
});