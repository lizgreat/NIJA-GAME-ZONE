document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.querySelector('#newsletterForm');
  const newsletterEmail = document.querySelector('#newsletterEmail');
  const newsletterMessage = document.querySelector('#newsletterMessage');

  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = newsletterEmail.value.trim();

    if (!email || !newsletterEmail.checkValidity()) {
      newsletterMessage.textContent = 'Enter a valid email address to continue.';
      newsletterMessage.style.color = '#ff8f8f';
      newsletterEmail.focus();
      return;
    }

    newsletterMessage.textContent = 'Thanks. Newsletter signup will be connected in a future backend phase.';
    newsletterMessage.style.color = 'var(--green)';
    newsletterForm.reset();
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const navigation = document.querySelector('#mainNav');
      if (navigation.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navigation).hide();
      }
    });
  });
});
