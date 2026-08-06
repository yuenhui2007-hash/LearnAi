// LearnAI Dino Mascot — adds mascot to pages
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
    // Don't add on small pages or if already present
    if (document.getElementById('learnai-dino')) return;

    const container = document.createElement('div');
    container.id = 'learnai-dino';
    container.className = 'mascot-container';
    container.innerHTML = `
      <div class="mascot-speech">${tips[Math.floor(Math.random() * tips.length)]}</div>
      <img src="images/mascot-dino.svg" alt="LearnAI Dino" width="80" height="96">
    `;
    document.body.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMascot);
  } else {
    initMascot();
  }
})();
