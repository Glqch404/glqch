document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.querySelector('.mode-toggle');
  const body = document.body;

  if (modeToggle) {
      modeToggle.addEventListener('click', function () {
          body.classList.toggle('light-mode');
      });
  }
});