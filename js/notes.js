/**
 * LearnAI — Shared script for all notes pages (notes/*.html)
 * Provides: Mark Complete, Prev/Next navigation, Print styles, Breadcrumb
 */
(function() {
    'use strict';

    // Only run on notes pages
    var container = document.querySelector('.notes-container');
    if (!container) return;

    // Inject data.js if not already present (notes pages don't include it)
    var dataLoaded = typeof window.subjects !== 'undefined';
    if (!dataLoaded) {
        var dataScript = document.createElement('script');
        dataScript.src = '../js/data.js?v=4';
        dataScript.async = false;
        document.head.appendChild(dataScript);
    }

    // ===== c. Print styles (no dependencies) =====
    var printStyle = document.createElement('style');
    printStyle.textContent =
        '@media print {' +
        '.navbar, #learnai-mascot, .external-resources, .ext-toggle, .ext-content { display:none !important; }' +
        '.notes-container { max-width:100% !important; padding:0 !important; box-shadow:none !important; background:#fff !important; }' +
        '.notes-page { padding:0 !important; background:#fff !important; }' +
        '.topic-nav, .mark-complete-btn, .breadcrumb { display:none !important; }' +
        '.notes-section, .notes-section * { overflow:visible !important; max-height:none !important; }' +
        'body { background:#fff !important; }' +
        '}';
    document.head.appendChild(printStyle);

    function initAll() {
        // Parse page info from URL
        var path = window.location.pathname;
        var filename = path.substring(path.lastIndexOf('/') + 1);
        var basename = filename.replace(/\.html$/, '');
        var isSummary = basename.endsWith('-summary');
        var baseName = isSummary ? basename.slice(0, -8) : basename;

        var subjectId = null;
        var topicId = null;

        // Pattern: SUBJECT-TOPIC  (e.g. physics-p1, chemistry-c1)
        var dashIdx = baseName.indexOf('-');
        if (dashIdx > 0) {
            subjectId = baseName.substring(0, dashIdx);
            topicId = baseName.substring(dashIdx + 1);
        } else {
            // Legacy files like a1.html — infer subject from back button
            var backBtnForSubject = document.querySelector('a.back-btn[href*="subject.html?id="]');
            if (backBtnForSubject) {
                var m = backBtnForSubject.getAttribute('href').match(/[?&]id=([^&]+)/);
                if (m) subjectId = m[1];
            }
            topicId = baseName;
        }

        var subjectName = '';
        var topicTitle = '';
        var topics = [];

        if (window.subjects && subjectId && subjects[subjectId]) {
            subjectName = subjects[subjectId].name;
            topics = subjects[subjectId].topics || [];
            var topic = topics.find(function(t) { return t.id === topicId; });
            if (topic) topicTitle = topic.title;
        }

        // Fallback topic title from page heading
        if (!topicTitle) {
            var h1 = document.querySelector('.notes-header h1');
            if (h1) topicTitle = h1.textContent.trim();
        }

        // ===== a. Mark Complete button =====
        if (subjectId && topicId) {
            var btnWrap = document.createElement('div');
            btnWrap.style.cssText = 'display:flex;justify-content:flex-end;margin-bottom:16px;';

            var btn = document.createElement('button');
            btn.className = 'mark-complete-btn';
            btn.style.cssText = 'padding:8px 18px;border-radius:50px;border:2px solid var(--primary);background:var(--white);color:var(--primary);font-weight:600;cursor:pointer;font-size:0.9rem;font-family:inherit;transition:all .2s;';
            btn.onmouseenter = function() {
                if (!btn.disabled) { btn.style.background = 'var(--primary-light)'; }
            };
            btn.onmouseleave = function() {
                if (!btn.disabled) { btn.style.background = 'var(--white)'; }
            };

            function updateBtn() {
                if (window.Progress && Progress.isCompleted(subjectId, topicId)) {
                    btn.textContent = '\u2713 Completed';
                    btn.style.background = 'var(--primary)';
                    btn.style.color = '#fff';
                    btn.style.borderColor = 'var(--primary)';
                    btn.style.cursor = 'default';
                    btn.disabled = true;
                } else {
                    btn.textContent = 'Mark Complete';
                    btn.style.background = 'var(--white)';
                    btn.style.color = 'var(--primary)';
                    btn.style.borderColor = 'var(--primary)';
                    btn.style.cursor = 'pointer';
                    btn.disabled = false;
                }
            }

            btn.addEventListener('click', function() {
                if (window.Progress) {
                    Progress.set(subjectId, topicId, true);
                    updateBtn();
                }
            });

            updateBtn();
            btnWrap.appendChild(btn);
            container.insertBefore(btnWrap, container.firstChild);
        }

        // ===== b. Prev/Next navigation =====
        if (window.subjects && subjectId && topicId && topics.length) {
            var currentIdx = topics.findIndex(function(t) { return t.id === topicId; });

            if (currentIdx !== -1) {
                var navWrap = document.createElement('div');
                navWrap.className = 'topic-nav';
                navWrap.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:40px;padding-top:24px;border-top:2px solid var(--gray-light);';

                function makeLink(topic, label, isPrev) {
                    var a = document.createElement('a');
                    a.href = subjectId + '-' + topic.id + '.html';
                    a.className = 'topic-nav-link';
                    a.style.cssText = 'display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:var(--radius);background:var(--light);color:var(--dark);font-weight:600;text-decoration:none;font-size:0.9rem;transition:background .2s;';
                    a.textContent = (isPrev ? '\u2190 ' : '') + label + (isPrev ? '' : ' \u2192');
                    a.onmouseenter = function() { a.style.background = 'var(--gray-light)'; };
                    a.onmouseleave = function() { a.style.background = 'var(--light)'; };
                    return a;
                }

                if (currentIdx > 0) {
                    navWrap.appendChild(makeLink(topics[currentIdx - 1], 'Previous Topic', true));
                } else {
                    var spacer = document.createElement('span');
                    navWrap.appendChild(spacer);
                }

                if (currentIdx < topics.length - 1) {
                    navWrap.appendChild(makeLink(topics[currentIdx + 1], 'Next Topic', false));
                }

                container.appendChild(navWrap);
            }
        }

        // ===== d. Breadcrumb =====
        var backBtn = document.querySelector('a.back-btn');
        if (backBtn) {
            var crumb = document.createElement('nav');
            crumb.className = 'breadcrumb';
            crumb.style.cssText = 'font-size:0.85rem;color:var(--gray);margin-bottom:12px;';
            crumb.setAttribute('aria-label', 'Breadcrumb');

            var subjUrl = '../subject.html?id=' + encodeURIComponent(subjectId || '');
            var subjLabel = subjectName || 'Subject';
            var topicLabel = topicTitle || '';

            crumb.innerHTML = '<a href="../index.html" style="color:var(--primary);text-decoration:none;">Home</a> <span style="margin:0 6px;color:var(--gray);">&gt;</span> ' +
                '<a href="../subjects.html" style="color:var(--primary);text-decoration:none;">Subjects</a> <span style="margin:0 6px;color:var(--gray);">&gt;</span> ' +
                '<a href="' + subjUrl + '" style="color:var(--primary);text-decoration:none;">' + escapeHtml(subjLabel) + '</a> <span style="margin:0 6px;color:var(--gray);">&gt;</span> ' +
                '<span style="color:var(--dark-light);">' + escapeHtml(topicLabel) + '</span>';

            backBtn.parentNode.insertBefore(crumb, backBtn.nextSibling);
        }
    }

    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    if (dataLoaded) {
        initAll();
    } else {
        var checkLoaded = setInterval(function() {
            if (typeof window.subjects !== 'undefined') {
                clearInterval(checkLoaded);
                initAll();
            }
        }, 50);
        setTimeout(function() {
            clearInterval(checkLoaded);
            initAll();
        }, 3000);
    }
})();
