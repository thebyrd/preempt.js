//Gets loaded on Every page

$(document).ready(function () {
  console.log('preempt loaded.');

  var store = {},
      storeSize = 0;

  $.each($('a'), function (idx, a) {

    if (!store[a.href]) {

      $.get(a.href, function (html) {
        var pattern = /<html[^>]*>((.|[\n\r])*)<\/html>/im.exec(html)
        if (pattern && pattern.length > 0 && ++storeSize < 10) store[a.href] = pattern[0]
        console.log('cached ' + a.href + '.')
      })
    
    }
  })


  $(document).on('click', 'a', function (e) {
    var cachedPage = store[e.target.href]
    if (cachedPage) {
      $('html').html(cachedPage)
      history.pushState({ foo: "bar"}, "ignored", e.target.href)
      return false
    }
  })

})