  $(document).ready(function () {
      $('.button-collapse').sideNav();
      $('.tooltipped').tooltip();
      

  });
// Make sure sw are supported
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker. .register('/shadab97.github.io/sw.js', scope: '/shadab97.github.io/')

  }
