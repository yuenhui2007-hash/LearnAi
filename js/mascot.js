// LearnAI Mascot — adds mascot to pages
(function() {
  const tips = [
    "You've got this! 💪",
    "Remember to take breaks! 🧠",
    "Active recall > re-reading! 📚",
    "Sleep consolidates memory! 😴",
    "Past papers are your best friend! 📝",
    "Show all working in maths! 🔢",
    "Plan essays before writing! ✍️",
    "Check your units! 📏",
    "Stay hydrated! 💧",
    "Believe in yourself! ⭐"
  ];

  function initMascot() {
    if (document.getElementById('learnai-mascot')) return;

    // Hide on small screens via media query
    var mqStyle = document.getElementById('mascot-mq');
    if (!mqStyle) {
      mqStyle = document.createElement('style');
      mqStyle.id = 'mascot-mq';
      mqStyle.textContent = '@media (max-width: 767px) { #learnai-mascot { display:none !important; } }';
      document.head.appendChild(mqStyle);
    }

    // Respect dismiss preference
    if (localStorage.getItem('mascot_hidden') === '1') return;

    const container = document.createElement('div');
    container.id = 'learnai-mascot';
    container.className = 'mascot-container';
    container.innerHTML = `
      <button class="mascot-dismiss" aria-label="Dismiss mascot" title="Dismiss">×</button>
      <div class="mascot-speech">${tips[Math.floor(Math.random() * tips.length)]}</div>
      <img src="images/mascot-new.jpg" alt="LearnAI Mascot" width="80" height="80" style="border-radius:50%;object-fit:cover;">
    `;
    document.body.appendChild(container);

    container.querySelector('.mascot-dismiss').addEventListener('click', function() {
      container.style.display = 'none';
      localStorage.setItem('mascot_hidden', '1');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMascot);
  } else {
    initMascot();
  }
})();