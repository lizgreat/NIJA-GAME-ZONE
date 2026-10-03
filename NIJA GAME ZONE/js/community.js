document.addEventListener('DOMContentLoaded', () => {
  const feedback = document.querySelector('#communityFeedback');
  document.querySelectorAll('.community-feedback-button').forEach((button) => {
    button.addEventListener('click', () => {
      feedback.textContent = button.dataset.feedback;
      feedback.style.color = 'var(--green)';
    });
  });
});
