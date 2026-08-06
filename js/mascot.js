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

    const container = document.createElement('div');
    container.id = 'learnai-mascot';
    container.className = 'mascot-container';
    container.innerHTML = `
      <div class="mascot-speech">${tips[Math.floor(Math.random() * tips.length)]}</div>
      <img src="images/mascot-new.jpg" alt="LearnAI Mascot" width="80" height="80" style="border-radius:50%;object-fit:cover;">
    `;
    document.body.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMascot);
  } else {
    initMascot();
  }
})();
