//Gets loaded on Every page

$(document).ready(function () {
  console.log('preempt loaded.');

  var store = {},
      storeSize = 0,
      maxStoreSize = 20,
      links = $('a'),
      pick = links.length > maxStoreSize ? Math.min : Math.max,
      maxSize = pick(maxStoreSize, links.length),
      fetch = function (idx, a) {
        if (!store[a.href])
          $.get(a.href, function (html) {
            var pattern = /<html[^>]*>((.|[\n\r])*)<\/html>/im.exec(html)
            if (pattern && pattern.length > 0 && storeSize++ < maxSize) store[a.href] = pattern[0]
          })
      },
      swap = function (e) {
        var cachedPage = store[e.target.href]
        if (cachedPage) {
          $('html').html(cachedPage)
          history.pushState({ foo: "bar"}, "ignored", e.target.href)
          return false
        }
      }

  $.each(links, fetch) //prefetch
  $(document).on('click', 'a', swap) //swap cached version

})