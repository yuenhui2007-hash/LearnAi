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
    var prefix = getPrefix();

    searchWrap = document.createElement('div');
    searchWrap.className = 'nav-search-wrap';
    searchWrap.style.cssText = 'position:relative;display:flex;align-items:center;';

    var btn = document.createElement('button');
    btn.className = 'nav-search-btn';
    btn.setAttribute('aria-label', 'Search');
    btn.innerHTML = '🔍';
    btn.style.cssText = 'background:none;border:none;font-size:1.1rem;cursor:pointer;padding:4px 8px;color:inherit;';

    searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'nav-search-input';
    searchInput.placeholder = 'Search topics… (press /)';
    searchInput.style.cssText =
      'width:0;opacity:0;padding:6px 10px;border:1px solid rgba(255,255,255,0.2);' +
      'border-radius:8px;background:rgba(255,255,255,0.1);color:inherit;font-size:0.85rem;' +
      'transition:width 0.2s,opacity 0.2s;outline:none;';

    resultsDropdown = document.createElement('div');
    resultsDropdown.className = 'nav-search-results';
    resultsDropdown.style.cssText =
      'position:absolute;top:calc(100% + 6px);right:0;width:280px;max-height:320px;overflow-y:auto;' +
      'background:#1e293b;border:1px solid #334155;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.3);' +
      'display:none;z-index:1000;padding:8px 0;';

    btn.addEventListener('click', function() {
      var active = searchInput.style.width !== '180px';
      searchInput.style.width = active ? '180px' : '0';
      searchInput.style.opacity = active ? '1' : '0';
      if (active) searchInput.focus();
    });

    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() { performSearch(searchInput.value.trim()); }, 150);
    });

    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchInput.value = '';
        resultsDropdown.style.display = 'none';
        searchInput.blur();
      }
    });

    searchWrap.appendChild(btn);
    searchWrap.appendChild(searchInput);
    searchWrap.appendChild(resultsDropdown);

    // Insert into navbar menu
    var menu = document.getElementById('navMenu');
    if (menu) {
      var li = document.createElement('li');
      li.className = 'nav-search-item';
      li.style.cssText = 'display:flex;align-items:center;margin-left:8px;';
      li.appendChild(searchWrap);
      menu.appendChild(li);
    }
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
