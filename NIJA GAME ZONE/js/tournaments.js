document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.querySelector('#registrationForm');
  const registrationMessage = document.querySelector('#registrationMessage');
  const playerName = document.querySelector('#playerName');
  const playerEmail = document.querySelector('#playerEmail');
  const tournamentSelect = document.querySelector('#tournamentSelect');
  const demoConsent = document.querySelector('#demoConsent');

  document.querySelectorAll('.register-button').forEach((button) => {
    button.addEventListener('click', () => {
      const tournament = button.closest('.tournament-card').querySelector('h2').textContent.replace(/\s+/g, ' ').trim();
      [...tournamentSelect.options].find((option) => option.textContent.toLowerCase().includes(tournament.split(' ')[0].toLowerCase()));
      document.querySelector('#registration').scrollIntoView({ behavior: 'smooth' });
      registrationMessage.textContent = `Choose ${tournament} in the form below.`;
      registrationMessage.style.color = 'var(--green)';
    });
  });

  const details = {
    'night-shift': 'NGZ Night Shift is a demonstration Valorant event planned as an online 5v5 competition. The date, team count, rules, and platform details will need confirmation before publication.',
    'street-stadium': 'Street to Stadium is a demonstration FC 26 event shown with Lagos as a sample location. Venue, console, schedule, and eligibility details are not live yet.',
    'boost-season': 'Boost Season is a demonstration Rocket League event planned as an online team competition. No teams, prizes, or match schedule have been confirmed.'
  };
  const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#tournamentModal'));
  document.querySelectorAll('.detail-tournament-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('#tournamentModalTitle').textContent = button.closest('.tournament-card').querySelector('h2').textContent.replace(/\s+/g, ' ').trim();
      document.querySelector('#tournamentModalText').textContent = details[button.dataset.tournament];
      modal.show();
    });
  });

  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!playerName.value.trim() || !playerEmail.checkValidity() || !tournamentSelect.value || !demoConsent.checked) {
      registrationMessage.textContent = 'Complete the required fields and confirm this is a demonstration form.';
      registrationMessage.style.color = '#ff8f8f';
      return;
    }
    registrationMessage.textContent = 'Interest recorded locally for this demo. No real registration or payment was processed.';
    registrationMessage.style.color = 'var(--green)';
    registrationForm.reset();
  });
});
