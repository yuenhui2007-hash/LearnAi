/**
 * LearnAI — Fully functional free educational platform
 */
(function() {
    'use strict';

    // ===== Navbar =====
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
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
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
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
            const p = this.get();
            if (!p[subject]) p[subject] = {};
            p[subject][topic] = completed;
            localStorage.setItem('learnai_progress', JSON.stringify(p));
        },
        isCompleted: function(subject, topic) {
            const p = this.get();
            return p[subject] && p[subject][topic] === true;
        },
        getSubjectProgress: function(subjectId, totalTopics) {
            const p = this.get()[subjectId] || {};
            const completed = Object.values(p).filter(v => v).length;
            return { completed, total: totalTopics, percent: Math.round((completed / totalTopics) * 100) };
        },
        getOverallProgress: function() {
            const p = this.get();
            let total = 0, completed = 0;
            Object.keys(p).forEach(sub => {
                Object.values(p[sub]).forEach(v => {
                    total++;
                    if (v) completed++;
                });
            });
            return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
        }
    };

    // ===== Mark topic as complete =====
    document.querySelectorAll('.mark-complete-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const subject = this.dataset.subject;
            const topic = this.dataset.topic;
            Progress.set(subject, topic, true);
            this.textContent = '✓ Completed';
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
            const tasks = this.get();
            tasks.push({ id: Date.now(), text: task, done: false, date: new Date().toISOString().split('T')[0] });
            localStorage.setItem('learnai_planner', JSON.stringify(tasks));
            this.render();
        },
        toggle: function(id) {
            const tasks = this.get().map(t => t.id == id ? { ...t, done: !t.done } : t);
            localStorage.setItem('learnai_planner', JSON.stringify(tasks));
            this.render();
        },
        remove: function(id) {
            const tasks = this.get().filter(t => t.id != id);
            localStorage.setItem('learnai_planner', JSON.stringify(tasks));
            this.render();
        },
        render: function() {
            const container = document.getElementById('plannerList');
            if (!container) return;
            const tasks = this.get();
            if (tasks.length === 0) {
                container.innerHTML = '<p style="color:var(--gray)">No tasks yet. Add your first revision task below.</p>';
                return;
            }
            container.innerHTML = tasks.map(t => `
                <div class="planner-item ${t.done ? 'done' : ''}">
                    <input type="checkbox" ${t.done ? 'checked' : ''} onchange="Planner.toggle(${t.id})">
                    <span>${t.text}</span>
                    <button onclick="Planner.remove(${t.id})" class="planner-delete">×</button>
                </div>
            `).join('');
        }
    };

    // ===== Animations =====
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    document.querySelectorAll('.feature-card, .subject-card, .dashboard-card').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (window.Planner) Planner.render();
    });

})();
