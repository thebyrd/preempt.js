$(document).ready(function () {

  var store = {},
      storeSize = 0,
      links = $('a'),
      maxSize = Math.min(100, links.length),

      fetch = function (idx, a) { //TODO (davidbyrd11) I'm fetching the same page multiple times
        if (!store[a.href] && a.href.slice(0, 4) == 'http' && storeSize++ < maxSize) {
          $.get(a.href, function (html) {
            var pattern = /<html[^>]*>((.|[\n\r])*)<\/html>/im.exec(html)
            if (pattern && pattern.length > 0) store[a.href] = pattern[0]
          })
        }
      },

      swap = function (e) {

        var cachedPage = store[e.target.href]
        if (cachedPage) {
          console.log('swapped!')
          $('html').html(cachedPage)
          history.pushState({ foo: "bar"}, "ignored", e.target.href)//TODO (davidbyrd11) this breaks the backbutton
          return false
        }
      }

  $.each(links, fetch) //prefetch
  $(document).on('click', 'a', swap) //swap cached version

})
