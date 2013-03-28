# Preempt.js
Before the user clicks on anything preempt.js will get the body of ever link on the page and put it in localStorage. When the user clicks on a link preempt will prevent the request from happening and replace the current body with the cached body in localStorage.

See Demo by running `node test.js` and going to `localhost:8000/test.html`.