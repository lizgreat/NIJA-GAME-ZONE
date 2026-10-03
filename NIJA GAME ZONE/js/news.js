document.addEventListener('DOMContentLoaded', () => {
  const articleItems = [...document.querySelectorAll('.article-item')];
  const searchInput = document.querySelector('#articleSearch');
  const articleCount = document.querySelector('#articleCount');
  const noResults = document.querySelector('#articleNoResults');
  let selectedCategory = 'all';

  function updateArticles() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleArticles = 0;

    articleItems.forEach((item) => {
      const matchesSearch = item.dataset.title.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || item.dataset.category.includes(selectedCategory);
      const isVisible = matchesSearch && matchesCategory;
      item.classList.toggle('d-none', !isVisible);
      if (isVisible) visibleArticles += 1;
    });

    articleCount.textContent = visibleArticles;
    noResults.classList.toggle('is-visible', visibleArticles === 0);
  }

  searchInput.addEventListener('input', updateArticles);
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-button.is-active').classList.remove('is-active');
      button.classList.add('is-active');
      selectedCategory = button.dataset.category;
      updateArticles();
    });
  });

  const articleDetails = {
    communities: ['How local gaming communities are changing the way we play', 'A demonstration feature about meetups, creators, and players building stronger gaming culture across Nigeria.'],
    patch: ['The update notes every competitive player should read', 'This placeholder story would explain the important gameplay changes in a verified patch, with a direct source link and author review.'],
    releases: ['Five fresh PC releases to keep on your radar', 'This placeholder roundup would be published only after release dates and official platforms had been checked.'],
    esports: ['The rise of grassroots esports in Lagos', 'This demonstration report would include tournament organizers, player interviews, venue information, and verified dates.'],
    technology: ['Why faster internet changes the gaming setup', 'This sample explainer introduces latency, stability, and setup decisions without claiming a live test.'],
    creators: ['Creators to watch: building a voice from Nigeria', 'This future profile would be based on an interview and links to the creator’s verified channels.'],
    squads: ["A beginner's guide to finding your first squad", 'This sample guide would point readers to moderated communities and clear safety guidelines.']
  };
  const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#articleModal'));
  document.querySelectorAll('.article-button').forEach((button) => {
    button.addEventListener('click', () => {
      const article = articleDetails[button.dataset.article];
      document.querySelector('#articleModalTitle').textContent = article[0];
      document.querySelector('#articleModalMeta').textContent = 'DEMONSTRATION ARTICLE / NGZ DESK';
      document.querySelector('#articleModalText').textContent = article[1];
      modal.show();
    });
  });

  updateArticles();
});
