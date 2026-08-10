/**
 * LearnAI — Fully functional free educational platform
 */
(function() {
    'use strict';

    // ===== Utilities =====
    window.Utils = {
        sanitize: function(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },
        validateEmail: function(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
        }
    };

    // ===== Navbar =====
    var navbar = document.getElementById('navbar');
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    if (navbar) {
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        });
    }
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        navMenu.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // ===== Smooth scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
            }
        });
    });

    // ===== Progress Tracking =====
    window.Progress = {
        get: function() {
            return JSON.parse(localStorage.getItem('learnai_progress') || '{}');
        },
        set: function(subject, topic, completed) {
            var p = this.get();
            if (!p[subject]) p[subject] = {};
            p[subject][topic] = completed;
            localStorage.setItem('learnai_progress', JSON.stringify(p));
        },
        isCompleted: function(subject, topic) {
            var p = this.get();
            return p[subject] && p[subject][topic] === true;
        },
        getSubjectProgress: function(subjectId, totalTopics) {
            var p = this.get()[subjectId] || {};
            var completed = Object.values(p).filter(function(v) { return v; }).length;
            return { completed: completed, total: totalTopics, percent: totalTopics ? Math.round((completed / totalTopics) * 100) : 0 };
        },
        getOverallProgress: function() {
            var p = this.get();
            var total = 0, completed = 0;
            Object.keys(p).forEach(function(sub) {
                Object.values(p[sub]).forEach(function(v) {
                    total++;
                    if (v) completed++;
                });
            });
            return { completed: completed, total: total, percent: total ? Math.round((completed / total) * 100) : 0 };
        }
    };

    // ===== Mark topic as complete =====
    document.querySelectorAll('.mark-complete-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var subject = this.dataset.subject;
            var topic = this.dataset.topic;
            Progress.set(subject, topic, true);
            this.textContent = '\u2713 Completed';
            this.classList.add('completed');
            this.disabled = true;
        });
    });

    // ===== Revision Planner =====
    window.Planner = {
        get: function() {
            return JSON.parse(localStorage.getItem('learnai_planner') || '[]');
        },
        add: function(task) {
            var tasks = this.get();
            tasks.push({ id: Date.now(), text: task, done: false, date: new Date().toISOString().split('T')[0] });
            localStorage.setItem('learnai_planner', JSON.stringify(tasks));
            this.render();
        },
        toggle: function(id) {
            var tasks = this.get().map(function(t) { return t.id == id ? { id: t.id, text: t.text, done: !t.done, date: t.date } : t; });
            localStorage.setItem('learnai_planner', JSON.stringify(tasks));
            this.render();
        },
        remove: function(id) {
            var tasks = this.get().filter(function(t) { return t.id != id; });
            localStorage.setItem('learnai_planner', JSON.stringify(tasks));
            this.render();
        },
        render: function() {
            var container = document.getElementById('plannerList');
            if (!container) return;
            var tasks = this.get();
            if (tasks.length === 0) {
                container.innerHTML = '<p style="color:var(--gray)">No tasks yet. Add your first revision task below.</p>';
                return;
            }
            container.innerHTML = tasks.map(function(t) {
                return '<div class="planner-item ' + (t.done ? 'done' : '') + '"><input type="checkbox" ' + (t.done ? 'checked' : '') + ' onchange="Planner.toggle(' + t.id + ')"><span>' + t.text + '</span><button onclick="Planner.remove(' + t.id + ')" class="planner-delete">\u00d7</button></div>';
            }).join('');
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        if (window.Planner) Planner.render();
    });

})();
