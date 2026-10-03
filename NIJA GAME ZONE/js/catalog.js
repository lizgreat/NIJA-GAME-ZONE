document.addEventListener('DOMContentLoaded', () => {
  const game = (id, name, genre, price, platforms, description, link, year, multiplayer, crossPlay, requirements, category) => ({ id, name, genre, price, platforms, description, link, year, multiplayer, crossPlay, requirements, category, publisher: 'Information not available', verified: '20 September 2026' });
  const games = [
    game('valorant', 'Valorant', 'FPS', 'Free', 'PC', '5v5 tactical shooter built around aim and team strategy.', 'https://playvalorant.com/en-us/download/', 2020, 'Online team multiplayer', 'Yes, official cross-play is not applicable across PC and console in this catalog', 'Windows 10/11; review official page for full minimum requirements', 'pc'),
    game('cs2', 'Counter-Strike 2', 'FPS', 'Free', 'PC', 'Objective-based competitive shooter from Valve.', 'https://store.steampowered.com/app/730/CounterStrike_2/', 2023, 'Online team multiplayer', 'Information not available', 'Windows 10; 8 GB RAM; 85 GB storage; 1 GB DirectX 11 GPU', 'pc'),
    game('gta-v', 'Grand Theft Auto V', 'Action / Open world', 'Paid', 'PC', 'Open-world action game set in Los Santos.', 'https://www.rockstargames.com/gta-v', 2015, 'Online multiplayer available', 'Information not available', 'Review the official store page for current PC requirements', 'pc'),
    game('fortnite-pc', 'Fortnite', 'Battle royale', 'Free', 'PC', 'Battle Royale, Zero Build, and creative experiences.', 'https://store.epicgames.com/en-US/p/fortnite', 2017, 'Online multiplayer', 'Yes, official Fortnite ecosystem supports cross-platform play', 'Windows 10 64-bit; 8 GB RAM; Core i3-3225 minimum', 'pc'),
    game('apex-legends', 'Apex Legends', 'Battle royale / FPS', 'Free', 'PC', 'Hero-based battle royale with squad-focused combat.', 'https://www.ea.com/games/apex-legends', 2019, 'Online squad multiplayer', 'Yes, supported across listed compatible platforms', 'Review the official store page for current PC requirements', 'pc'),
    game('warframe-pc', 'Warframe', 'Action / RPG', 'Free', 'PC', 'Fast third-person action in a science-fiction universe.', 'https://www.warframe.com/download', 2013, 'Online cooperative multiplayer', 'Information not available', 'Windows 7 64-bit; 4 GB RAM; 75 GB storage', 'pc'),
    game('rocket-league', 'Rocket League', 'Racing / Sports', 'Free', 'PC', 'Arcade soccer played with rocket-powered cars.', 'https://store.epicgames.com/en-US/p/rocket-league', 2015, 'Online multiplayer', 'Yes, cross-platform play is supported', 'Windows 7 64-bit; 4 GB RAM; 20 GB storage', 'pc'),
    game('league-of-legends', 'League of Legends', 'MOBA', 'Free', 'PC', 'Team-based strategy game with champions and lanes.', 'https://www.leagueoflegends.com/en-us/download/', 2009, 'Online team multiplayer', 'Information not available', 'Review the official page for current PC requirements', 'pc'),
    game('pubg-battlegrounds', 'PUBG: Battlegrounds', 'Battle royale', 'Free', 'PC', 'Last-player-standing battle royale combat.', 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/', 2017, 'Online multiplayer', 'Information not available', 'Review the official store page for current PC requirements', 'pc'),
    game('warzone', 'Call of Duty: Warzone', 'Battle royale / FPS', 'Free', 'PC', 'Large-scale free-to-play Call of Duty combat.', 'https://www.callofduty.com/warzone', 2020, 'Online multiplayer', 'Information not available', 'Review the official page for current PC requirements', 'pc'),
    game('dota-2', 'Dota 2', 'MOBA', 'Free', 'PC', 'Competitive strategy game with a deep hero roster.', 'https://store.steampowered.com/app/570/Dota_2/', 2013, 'Online team multiplayer', 'Information not available', 'Review the official store page for current PC requirements', 'pc'),
    game('overwatch-2', 'Overwatch 2', 'FPS / Hero shooter', 'Free', 'PC', 'Team-based hero shooter with objective modes.', 'https://overwatch.blizzard.com/', 2022, 'Online team multiplayer', 'Yes, cross-platform play is supported by Blizzard', 'Review the official page for current PC requirements', 'pc'),
    game('minecraft-java', 'Minecraft Java Edition', 'Sandbox / Adventure', 'Paid', 'PC', 'Sandbox building and survival in the Java Edition.', 'https://www.minecraft.net/store/minecraft-java-bedrock-edition-pc', 2011, 'Online multiplayer', 'No, Java and Bedrock use separate multiplayer ecosystems', 'Review the official page for current PC requirements', 'pc'),
    game('the-sims-4', 'The Sims 4', 'Simulation', 'Free', 'PC', 'Create characters, build homes, and tell life stories.', 'https://www.ea.com/games/the-sims/the-sims-4', 2014, 'Primarily single-player', 'Not applicable', 'Review the official EA page for current PC requirements', 'pc'),
    game('fall-guys', 'Fall Guys', 'Party / Platformer', 'Free', 'PC', 'Colorful obstacle-course competition for chaotic matches.', 'https://www.fallguys.com/', 2020, 'Online multiplayer', 'Yes, supports cross-platform play', 'Review the official page for current PC requirements', 'pc'),
    game('destiny-2', 'Destiny 2', 'FPS / Action RPG', 'Free', 'PC', 'Shared-world shooter with competitive and cooperative modes.', 'https://www.bungie.net/7/en/Destiny', 2017, 'Online cooperative and competitive multiplayer', 'Yes, cross-play is supported', 'Review the official page for current PC requirements', 'pc'),
    game('pubg-mobile', 'PUBG Mobile', 'Battle royale', 'Free', 'Android / iOS', 'Mobile battle royale with squad and solo modes.', 'https://www.pubgmobile.com/', 2018, 'Online multiplayer', 'Mobile ecosystem; PC cross-play not claimed', 'Android and iOS availability verified; check store listing for device requirements', 'mobile'),
    game('cod-mobile', 'Call of Duty: Mobile', 'FPS / Multiplayer', 'Free', 'Android / iOS', 'Multiplayer, battle royale, and Call of Duty modes on mobile.', 'https://www.callofduty.com/mobile', 2019, 'Online multiplayer', 'Mobile ecosystem; PC cross-play not claimed', 'Android and iOS availability verified; check store listing for device requirements', 'mobile'),
    game('free-fire', 'Free Fire', 'Battle royale', 'Free', 'Android / iOS', 'Short-session battle royale designed for mobile play.', 'https://ff.garena.com/', 2017, 'Online multiplayer', 'Information not available', 'Review the official store page for current device requirements', 'mobile'),
    game('mobile-legends', 'Mobile Legends: Bang Bang', 'MOBA', 'Free', 'Android / iOS', '5v5 mobile multiplayer online battle arena.', 'https://www.mobilelegends.com/', 2016, 'Online team multiplayer', 'Information not available', 'Review the official store page for current device requirements', 'mobile'),
    game('efootball-mobile', 'eFootball', 'Sports', 'Free', 'Android / iOS', 'Mobile football matches and team building.', 'https://www.konami.com/efootball/', 2021, 'Online multiplayer', 'Information not available', 'Review the official store page for current device requirements', 'mobile'),
    game('asphalt-legends', 'Asphalt Legends', 'Racing', 'Free', 'Android / iOS', 'Arcade racing with licensed cars and events.', 'https://asphaltlegends.com/', 2018, 'Online multiplayer', 'Information not available', 'Review the official store page for current device requirements', 'mobile'),
    game('brawl-stars', 'Brawl Stars', 'Action / Multiplayer', 'Free', 'Android / iOS', 'Fast multiplayer battles from Supercell.', 'https://supercell.com/en/games/brawlstars/', 2018, 'Online multiplayer', 'Mobile ecosystem; PC cross-play not claimed', 'Review the official store page for current device requirements', 'mobile'),
    game('clash-royale', 'Clash Royale', 'Strategy', 'Free', 'Android / iOS', 'Real-time card battles from Supercell.', 'https://supercell.com/en/games/clashroyale/', 2016, 'Online multiplayer', 'Mobile ecosystem; PC cross-play not claimed', 'Review the official store page for current device requirements', 'mobile'),
    game('stumble-guys', 'Stumble Guys', 'Party / Multiplayer', 'Free', 'Android / iOS', 'Obstacle-course party game for chaotic matches.', 'https://www.stumbleguys.com/', 2020, 'Online multiplayer', 'Information not available', 'Review the official store page for current device requirements', 'mobile'),
    game('shadow-fight-4', 'Shadow Fight 4', 'Fighting / RPG', 'Free', 'Android / iOS', 'Fighting action with a roster of heroes.', 'https://nekki.com/shadow-fight-4/', 2020, 'Online multiplayer modes available', 'Information not available', 'Review the official store page for current device requirements', 'mobile'),
    game('blood-strike', 'Blood Strike', 'FPS / Battle royale', 'Free', 'Android / iOS', 'Fast-paced shooter built for mobile sessions.', 'https://www.blood-strike.com/', 2024, 'Online multiplayer', 'Information not available', 'Review the official store page for current device requirements', 'mobile'),
    game('roblox-mobile', 'Roblox', 'Adventure / Social', 'Free', 'Android / iOS', 'A platform of user-created games and experiences.', 'https://www.roblox.com/', 2006, 'Online multiplayer varies by experience', 'Platform availability verified; experience-level cross-play varies', 'Review the official store page for current device requirements', 'mobile'),
    game('genshin-mobile', 'Genshin Impact', 'Action / RPG', 'Free', 'Android / iOS', 'Open-world action RPG from HoYoverse.', 'https://genshin.hoyoverse.com/', 2020, 'Online cooperative multiplayer', 'Mobile and PC cross-play supported where compatible', 'Review the official store page for current device requirements', 'mobile'),
    game('among-us-mobile', 'Among Us', 'Party / Social deduction', 'Paid / varies', 'Android / iOS', 'Social deduction game for crews and impostors.', 'https://www.innersloth.com/games/among-us/', 2018, 'Online multiplayer', 'Cross-play supported across compatible versions', 'Review the official store page for current device requirements', 'mobile'),
    game('subway-surfers', 'Subway Surfers', 'Arcade / Runner', 'Free', 'Android / iOS', 'Endless runner built for quick mobile sessions.', 'https://sybo.net/games/subway-surfers', 2012, 'Primarily single-player', 'Not applicable', 'Review the official store page for current device requirements', 'mobile'),
    game('pokemon-go', 'Pokémon GO', 'Adventure / Augmented reality', 'Free', 'Android / iOS', 'Explore the real world and discover Pokémon through location-based play.', 'https://pokemongolive.com/', 2016, 'Online social features', 'Mobile-only multiplayer features; PC cross-play not claimed', 'Review the official store page for current device requirements', 'mobile'),
    game('hay-day', 'Hay Day', 'Simulation / Farming', 'Free', 'Android / iOS', 'Build a farm, trade goods, and grow a peaceful mobile community.', 'https://supercell.com/en/games/hayday/', 2012, 'Social features', 'Mobile-only; PC cross-play not claimed', 'Review the official store page for current device requirements', 'mobile'),
    game('fortnite-cross', 'Fortnite', 'Battle royale', 'Free', 'PC + Android', 'Battle experiences available across PC and supported mobile platforms.', 'https://www.fortnite.com/', 2017, 'Online multiplayer', 'Yes, official Fortnite ecosystem supports cross-platform play', 'Mobile availability and requirements vary; review the official page', 'cross'),
    game('roblox-cross', 'Roblox', 'Adventure / Social', 'Free', 'PC + Android / iOS', 'User-created experiences available on PC and mobile.', 'https://www.roblox.com/', 2006, 'Online multiplayer varies by experience', 'Platform availability verified; experience-level cross-play varies', 'Review the official pages for current requirements', 'cross'),
    game('minecraft-bedrock', 'Minecraft Bedrock Edition', 'Sandbox / Adventure', 'Paid', 'PC + Android / iOS', 'Sandbox building and survival with Bedrock cross-platform support.', 'https://www.minecraft.net/', 2011, 'Online multiplayer', 'Cross-play supported across compatible Bedrock platforms', 'Review the official page for current requirements', 'cross'),
    game('genshin-cross', 'Genshin Impact', 'Action / RPG', 'Free', 'PC + Android / iOS', 'Open-world action RPG with shared progression across supported platforms.', 'https://genshin.hoyoverse.com/', 2020, 'Online cooperative multiplayer', 'Cross-play and cross-progression supported where accounts and versions are compatible', 'Review the official page for current requirements', 'cross'),
    game('among-us-cross', 'Among Us', 'Party / Social deduction', 'Paid / varies', 'PC + Android / iOS', 'Social deduction game for crews and impostors.', 'https://www.innersloth.com/games/among-us/', 2018, 'Online multiplayer', 'Cross-play supported across compatible versions', 'Review the official page for current requirements', 'cross')
  ];

  const page = document.querySelector('.catalog-page');
  const catalog = games.filter((item) => item.category === page.dataset.catalog);
  const grid = document.querySelector('#catalogGrid');
  const filters = document.querySelector('#catalogFilters');
  const search = document.querySelector('#catalogSearch');
  const sort = document.querySelector('#catalogSort');
  const count = document.querySelector('#catalogCount');
  const noResults = document.querySelector('#catalogNoResults');
  let activeFilters = { genre: 'all', price: 'all', multiplayer: 'all', crossPlay: 'all' };

  if (!sort.querySelector('[value="newest"]')) {
    sort.insertAdjacentHTML('beforeend', '<option value="newest">Newest release</option><option value="oldest">Oldest release</option>');
  }

  function uniqueValues(property) { return [...new Set(catalog.map((item) => item[property]))]; }
  function createFilterGroup(label, key, values) {
    return `<div class="filter-group"><span class="filter-group__label">${label}</span><select class="catalog-filter" data-filter-key="${key}" aria-label="Filter by ${label}"><option value="all">All</option>${values.map((value) => `<option value="${value}">${value}</option>`).join('')}</select></div>`;
  }
  filters.innerHTML = `${createFilterGroup('Genre', 'genre', uniqueValues('genre'))}${createFilterGroup('Price', 'price', uniqueValues('price'))}${createFilterGroup('Multiplayer', 'multiplayer', ['Online', 'Single-player'])}${createFilterGroup('Cross-play', 'crossPlay', ['Yes', 'No', 'Information not available'])}`;

  function matchesMultiplayer(item, filter) { if (filter === 'all') return true; return filter === 'Online' ? item.multiplayer.toLowerCase().includes('online') : item.multiplayer.toLowerCase().includes('single'); }
  function matchesCrossPlay(item, filter) { if (filter === 'all') return true; if (filter === 'Yes') return item.crossPlay.toLowerCase().startsWith('yes') || item.crossPlay.toLowerCase().includes('supported'); if (filter === 'No') return item.crossPlay.toLowerCase().startsWith('no') || item.crossPlay.toLowerCase().includes('not applicable'); return item.crossPlay.toLowerCase().includes('information'); }
  function safeText(value) { return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character])); }

  function render() {
    const term = search.value.trim().toLowerCase();
    const sorted = [...catalog].sort((a, b) => {
      if (sort.value === 'az') return a.name.localeCompare(b.name);
      if (sort.value === 'za') return b.name.localeCompare(a.name);
      if (sort.value === 'newest') return b.year - a.year;
      if (sort.value === 'oldest') return a.year - b.year;
      return catalog.indexOf(a) - catalog.indexOf(b);
    });
    const visible = sorted.filter((item) => {
      const searchable = `${item.name} ${item.genre} ${item.platforms} ${item.description}`.toLowerCase();
      return searchable.includes(term) && (activeFilters.genre === 'all' || item.genre === activeFilters.genre) && (activeFilters.price === 'all' || item.price === activeFilters.price) && matchesMultiplayer(item, activeFilters.multiplayer) && matchesCrossPlay(item, activeFilters.crossPlay);
    });
    grid.innerHTML = visible.map((item, index) => `<div class="col-md-6 col-lg-4"><article class="catalog-card"><div class="catalog-card__visual catalog-card__visual--${(index % 5) + 1}"><span class="catalog-card__index">${String(index + 1).padStart(2, '0')}</span><span class="catalog-card__title">${safeText(item.name)}</span><span class="catalog-card__platform">${safeText(item.platforms)}</span><span class="catalog-card__placeholder">IMAGE PLACEHOLDER</span></div><div class="catalog-card__body"><div class="catalog-card__meta"><span>${safeText(item.genre)}</span><span>${safeText(item.price)}</span></div><p>${safeText(item.description)}</p><div class="catalog-card__actions"><button class="button button--small-ghost catalog-details" type="button" data-id="${item.id}">View details</button><a class="button button--primary" href="${item.link}" target="_blank" rel="noopener noreferrer">Official link ↗</a></div></div></article></div>`).join('');
    count.textContent = visible.length;
    noResults.classList.toggle('is-visible', visible.length === 0);
    document.querySelectorAll('.catalog-details').forEach((button) => button.addEventListener('click', () => showDetails(games.find((item) => item.id === button.dataset.id))));
  }

  function showDetails(item) {
    const body = document.querySelector('#catalogModalBody');
    document.querySelector('#catalogModalTitle').textContent = item.name;
    body.innerHTML = `<p class="catalog-detail-lead">${safeText(item.description)}</p><dl class="catalog-detail-list"><dt>Genre</dt><dd>${safeText(item.genre)}</dd><dt>Platforms</dt><dd>${safeText(item.platforms)}</dd><dt>Status</dt><dd>${safeText(item.price)}</dd><dt>Publisher</dt><dd>${safeText(item.publisher)}</dd><dt>Release year</dt><dd>${item.year || 'Information not available'}</dd><dt>Multiplayer</dt><dd>${safeText(item.multiplayer)}</dd><dt>Cross-play</dt><dd>${safeText(item.crossPlay)}</dd><dt>Requirements</dt><dd>${safeText(item.requirements)}</dd><dt>Last verified</dt><dd>${item.verified}</dd></dl><a class="button button--primary" href="${item.link}" target="_blank" rel="noopener noreferrer">Open official page ↗</a>`;
    bootstrap.Modal.getOrCreateInstance(document.querySelector('#catalogModal')).show();
  }

  filters.addEventListener('change', (event) => { const control = event.target.closest('.catalog-filter'); if (!control) return; activeFilters[control.dataset.filterKey] = control.value; render(); });
  document.querySelector('#clearFilters').addEventListener('click', () => { search.value = ''; sort.value = 'featured'; activeFilters = { genre: 'all', price: 'all', multiplayer: 'all', crossPlay: 'all' }; document.querySelectorAll('.catalog-filter').forEach((control) => { control.value = 'all'; }); render(); });
  search.addEventListener('input', render);
  sort.addEventListener('change', render);
  render();
});
