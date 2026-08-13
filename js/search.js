(function() {
  'use strict';

  var searchWrap = null;
  var searchInput = null;
  var resultsDropdown = null;
  var debounceTimer = null;

  function getPrefix() {
    return window.location.pathname.includes('/notes/') ? '../' : './';
  }

  function buildIndex() {
    if (typeof window.allTopics === 'undefined' || !Array.isArray(window.allTopics)) return [];
    return window.allTopics.map(function(t) {
      return {
        id: t.id,
        subject: t.subject,
        subjectName: t.subjectName,
        title: t.title,
        icon: t.icon || '',
        code: t.code || ''
      };
    });
  }

  function createSearchUI() {
    // Search is now handled by nav.js search.html link — disable duplicate inline search
    return;
  }

  function performSearch(query) {
    if (!query) {
      resultsDropdown.style.display = 'none';
      return;
    }
    var index = buildIndex();
    var q = query.toLowerCase();
    var matches = index.filter(function(item) {
      return item.title.toLowerCase().indexOf(q) !== -1 ||
             item.subjectName.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);

    if (matches.length === 0) {
      resultsDropdown.innerHTML = '<div style="padding:10px 16px;color:#94a3b8;font-size:0.85rem;">No results found</div>';
      resultsDropdown.style.display = 'block';
      return;
    }

    var prefix = getPrefix();
    resultsDropdown.innerHTML = matches.map(function(m) {
      var href = prefix + 'subject.html?id=' + encodeURIComponent(m.subject);
      return '<a href="' + href + '" style="display:block;padding:8px 16px;color:#e2e8f0;text-decoration:none;font-size:0.85rem;border-bottom:1px solid #334155;" onmouseover="this.style.background=\'#334155\'" onmouseout="this.style.background=\'transparent\'">' +
        '<div style="font-weight:600;">' + (m.icon ? m.icon + ' ' : '') + m.title + '</div>' +
        '<div style="font-size:0.75rem;color:#94a3b8;margin-top:2px;">' + m.subjectName + ' · ' + m.code + '</div>' +
      '</a>';
    }).join('');
    resultsDropdown.style.display = 'block';
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      if (searchInput) {
        searchInput.style.width = '180px';
        searchInput.style.opacity = '1';
        searchInput.focus();
      }
    }
  });

  document.addEventListener('click', function(e) {
    if (searchWrap && !searchWrap.contains(e.target)) {
      if (resultsDropdown) resultsDropdown.style.display = 'none';
    }
  });

  function init() {
    createSearchUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
