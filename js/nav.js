// Auto-highlight current page in navbar
(function(){
  var current = window.location.pathname.split('/').pop() || 'index.html';
  if (!current || current === '') current = 'index.html';
  document.querySelectorAll('.nav-link').forEach(function(link){
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();
