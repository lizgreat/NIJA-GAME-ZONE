document.addEventListener('DOMContentLoaded', () => {
  const requirements = {
    valorant: {
      title: 'Valorant', source: 'Riot Games official download page', platform: 'PC', minimum: { cpu: null, ram: null, gpu: null, storage: null, os: null }, note: 'The current verified catalog does not include enough published minimum values for a safe automatic comparison.'
    },
    fortnite: {
      title: 'Fortnite', source: 'Epic Games Store official page', platform: 'PC', minimum: { cpu: 'Core i3-3225 3.3 GHz', ram: 8, gpu: 'Intel HD 4000 or AMD Radeon Vega 8', storage: null, os: 'Windows 10 64-bit version 1703' }, note: 'Epic lists 8 GB RAM and the processor, graphics, and operating system values above for minimum play.'
    },
    'counter-strike-2': {
      title: 'Counter-Strike 2', source: 'Steam official store page', platform: 'PC', minimum: { cpu: '4 hardware CPU threads; Intel Core i5 750 or higher', ram: 8, gpu: '1 GB or more, DirectX 11-compatible, Shader Model 5.0', storage: 85, os: 'Windows 10' }, note: 'Steam lists these values under the Windows minimum requirements.'
    },
    warframe: {
      title: 'Warframe', source: 'Warframe official download page', platform: 'PC', minimum: { cpu: 'Intel Core i7 860, Intel Core i5 750, or AMD FX-4100', ram: 4, gpu: 'DirectX 11+ capable graphics card', storage: 75, os: 'Windows 7 64-bit' }, note: 'Digital Extremes lists these values on the official download page.'
    },
    'rocket-league': {
      title: 'Rocket League', source: 'Epic Games Store official page', platform: 'PC', minimum: { cpu: '2.5 GHz dual core', ram: 4, gpu: 'NVIDIA GeForce 760 or AMD Radeon R7 270X', storage: 20, os: 'Windows 7 64-bit or newer' }, note: 'Epic lists these values under the Windows minimum requirements.'
    }
  };

  const gameSelect = document.querySelector('#gameSelect');
  const checkerForm = document.querySelector('#checkerForm');
  const checkerResult = document.querySelector('#checkerResult');
  const requirementsReference = document.querySelector('#requirementsReference');
  const pcFields = document.querySelector('#pcFields');
  const mobileFields = document.querySelector('#mobileFields');
  let deviceType = 'pc';

  function currentGame() {
    return requirements[gameSelect.value];
  }

  function renderRequirements() {
    const game = currentGame();
    const values = game.minimum;
    const rows = [
      ['Operating system', values.os || 'Unavailable in verified catalog'],
      ['Processor / CPU', values.cpu || 'Unavailable in verified catalog'],
      ['RAM', values.ram ? `${values.ram} GB minimum` : 'Unavailable in verified catalog'],
      ['Graphics / GPU', values.gpu || 'Unavailable in verified catalog'],
      ['Storage', values.storage ? `${values.storage} GB available` : 'Unavailable in verified catalog']
    ];
    requirementsReference.innerHTML = `<div class="requirements-reference__top"><span>${game.platform} / MINIMUM</span><span>${game.source}</span></div>${rows.map(([label, value]) => `<div class="requirement-row"><span>${label}</span><strong>${value}</strong></div>`).join('')}<p>${game.note}</p>`;
  }

  function comparePc() {
    const game = currentGame();
    const values = game.minimum;
    const ram = Number(document.querySelector('#ram').value);
    const storage = Number(document.querySelector('#storage').value);
    const os = document.querySelector('#operatingSystem').value.trim().toLowerCase();
    const cpu = document.querySelector('#cpu').value.trim();
    const gpu = document.querySelector('#gpu').value.trim();
    const checks = [];
    const unknowns = [];

    if (values.ram && ram) checks.push({ label: 'RAM', passed: ram >= values.ram });
    else unknowns.push('RAM');
    if (values.storage && storage) checks.push({ label: 'Storage', passed: storage >= values.storage });
    else if (values.storage) unknowns.push('Storage');
    if (values.os && os) checks.push({ label: 'Operating system', passed: os.includes('windows') && (values.os.includes('windows 7') || os.includes('windows 10') || os.includes('windows 11')) });
    else unknowns.push('Operating system');
    if (values.cpu && cpu) unknowns.push('CPU model needs manual comparison');
    else unknowns.push('CPU');
    if (values.gpu && gpu) unknowns.push('GPU model needs manual comparison');
    else unknowns.push('GPU');

    return buildResult(checks, unknowns, game);
  }

  function compareMobile() {
    const game = currentGame();
    return buildResult([], ['Mobile requirements are unavailable for this game in the verified catalog'], game);
  }

  function buildResult(checks, unknowns, game) {
    const failed = checks.filter((check) => !check.passed);
    let heading = 'Insufficient information to determine';
    let tone = 'result--unknown';
    if (failed.length) { heading = 'Some requirements may not be met'; tone = 'result--warning'; }
    else if (checks.length && unknowns.length === 0) { heading = 'Meets listed minimum requirements'; tone = 'result--pass'; }
    const checkList = checks.map((check) => `<li class="${check.passed ? 'is-pass' : 'is-fail'}">${check.label}: ${check.passed ? 'meets the listed minimum' : 'below the listed minimum'}</li>`).join('');
    const unknownList = unknowns.map((item) => `<li>${item}: unavailable for automatic comparison</li>`).join('');
    checkerResult.className = `checker-result ${tone}`;
    checkerResult.innerHTML = `<p class="eyebrow">${game.title} / ${deviceType.toUpperCase()} ESTIMATE</p><h2>${heading}</h2><p>We compared only the values that can be checked safely from the published data.</p><ul class="checker-list">${checkList}${unknownList}</ul><small>This is an estimate, not a guarantee of performance.</small>`;
  }

  document.querySelectorAll('.device-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      deviceType = tab.dataset.device;
      document.querySelector('.device-tab.is-active').classList.remove('is-active');
      tab.classList.add('is-active');
      document.querySelectorAll('.device-tab').forEach((item) => item.setAttribute('aria-selected', item === tab ? 'true' : 'false'));
      pcFields.classList.toggle('d-none', deviceType !== 'pc');
      mobileFields.classList.toggle('d-none', deviceType !== 'mobile');
      renderRequirements();
    });
  });
  gameSelect.addEventListener('change', renderRequirements);
  checkerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (deviceType === 'pc') comparePc();
    else compareMobile();
  });
  renderRequirements();
});
