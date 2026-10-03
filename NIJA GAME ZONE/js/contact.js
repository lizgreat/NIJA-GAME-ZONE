document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('#contactForm');
  const contactName = document.querySelector('#contactName');
  const contactEmail = document.querySelector('#contactEmail');
  const contactSubject = document.querySelector('#contactSubject');
  const contactMessage = document.querySelector('#contactMessage');
  const feedback = document.querySelector('#contactFeedback');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const hasMessage = contactMessage.value.trim().length > 0;
    if (!contactName.value.trim() || !contactEmail.checkValidity() || !contactSubject.value.trim() || !hasMessage) {
      feedback.textContent = 'Complete your name, email, subject, and message before continuing.';
      feedback.style.color = '#ff8f8f';
      return;
    }
    feedback.textContent = 'Your message is prepared locally. Sending will be connected in a future backend phase.';
    feedback.style.color = 'var(--green)';
    contactForm.reset();
  });
});
