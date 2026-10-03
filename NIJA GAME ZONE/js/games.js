document.addEventListener('DOMContentLoaded', () => {
  const gameItems = [...document.querySelectorAll('.game-item')];
  const searchInput = document.querySelector('#gameSearch');
  const sortSelect = document.querySelector('#sortGames');
  const resultCount = document.querySelector('#resultCount');
  const noResults = document.querySelector('#noResults');
  let selectedCategory = 'all';

  document.querySelectorAll('.directory-card__image img').forEach((image) => {
    image.addEventListener('error', () => {
      image.hidden = true;
      image.nextElementSibling.classList.add('is-visible');
    });
  });

  function updateGames() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const sortedItems = [...gameItems].sort((first, second) => {
      if (sortSelect.value === 'az') return first.dataset.name.localeCompare(second.dataset.name);
      if (sortSelect.value === 'za') return second.dataset.name.localeCompare(first.dataset.name);
      return Number(first.dataset.featured) - Number(second.dataset.featured);
    });
    sortedItems.forEach((item) => document.querySelector('#gameGrid').appendChild(item));

    let visibleGames = 0;
    gameItems.forEach((item) => {
      const matchesSearch = item.dataset.name.toLowerCase().includes(searchTerm) || item.dataset.category.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || item.dataset.category.includes(selectedCategory);
      const isVisible = matchesSearch && matchesCategory;
      item.classList.toggle('d-none', !isVisible);
      if (isVisible) visibleGames += 1;
    });
    resultCount.textContent = visibleGames;
    noResults.classList.toggle('is-visible', visibleGames === 0);
  }

  searchInput.addEventListener('input', updateGames);
  sortSelect.addEventListener('change', updateGames);
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-button.is-active').classList.remove('is-active');
      button.classList.add('is-active');
      selectedCategory = button.dataset.category;
      updateGames();
    });
  });

  const details = {
    valorant: { title: 'VALORANT', description: 'A free-to-play 5v5 tactical shooter from Riot Games. This listing links to the official Riot download page.', requirements: ['Windows 10/11', 'Minimum: 4 GB RAM', 'Official source: Riot Games'], url: 'https://playvalorant.com/en-us/download/' },
    fortnite: { title: 'FORTNITE', description: 'A free-to-play action experience from Epic Games with Battle Royale, Zero Build, and more.', requirements: ['Windows 10 64-bit or newer', 'Minimum: 8 GB RAM', 'Official source: Epic Games Store'], url: 'https://store.epicgames.com/en-US/p/fortnite' },
    'counter-strike-2': { title: 'COUNTER-STRIKE 2', description: 'A free-to-play competitive tactical shooter from Valve, available through Steam.', requirements: ['Windows 10', 'Minimum: 8 GB RAM', '85 GB available storage', 'Official source: Steam'], url: 'https://store.steampowered.com/app/730/CounterStrike_2/' },
    warframe: { title: 'WARFRAME', description: 'A free-to-play third-person action game from Digital Extremes. The official page also provides its standalone installer.', requirements: ['Windows 7 64-bit', 'Minimum: 4 GB RAM', '75 GB available storage', 'Official source: Digital Extremes'], url: 'https://www.warframe.com/download' },
    'rocket-league': { title: 'ROCKET LEAGUE', description: 'A free-to-play, cross-platform hybrid of arcade soccer and vehicle action from Psyonix.', requirements: ['Windows 7 64-bit or newer', 'Minimum: 4 GB RAM', '20 GB available storage', 'Official source: Epic Games Store'], url: 'https://store.epicgames.com/en-US/p/rocket-league' }
  };
  const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#gameDetailsModal'));
  document.querySelectorAll('.details-button').forEach((button) => {
    button.addEventListener('click', () => {
      const game = details[button.dataset.game];
      document.querySelector('#detailTitle').textContent = game.title;
      document.querySelector('#detailDescription').textContent = game.description;
      document.querySelector('#detailList').innerHTML = game.requirements.map((item) => `<li>${item}</li>`).join('');
      document.querySelector('#detailDownload').href = game.url;
      modal.show();
    });
  });

  updateGames();
});