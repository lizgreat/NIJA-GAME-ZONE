document.addEventListener('DOMContentLoaded', () => {
  const gearItems = [...document.querySelectorAll('.gear-item')];
  const searchInput = document.querySelector('#gearSearch');
  const gearCount = document.querySelector('#gearCount');
  const noResults = document.querySelector('#gearNoResults');
  let selectedCategory = 'all';

  function updateGear() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleProducts = 0;

    gearItems.forEach((item) => {
      const matchesSearch = item.dataset.name.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || item.dataset.category === selectedCategory;
      const isVisible = matchesSearch && matchesCategory;
      item.classList.toggle('d-none', !isVisible);
      if (isVisible) visibleProducts += 1;
    });

    gearCount.textContent = visibleProducts;
    noResults.classList.toggle('is-visible', visibleProducts === 0);
  }

  searchInput.addEventListener('input', updateGear);
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-button.is-active').classList.remove('is-active');
      button.classList.add('is-active');
      selectedCategory = button.dataset.category;
      updateGear();
    });
  });

  const productDetails = {
    mouse: ['Gaming Mouse', 'A future verified listing will include sensor information, connection type, dimensions, price, retailer, and an affiliate disclosure.'],
    keyboard: ['Mechanical Keyboard', 'A future verified listing will include switch type, layout, connection type, warranty, price, retailer, and an affiliate disclosure.'],
    headset: ['Gaming Headset', 'A future verified listing will include platform support, microphone details, connection type, price, retailer, and an affiliate disclosure.'],
    chair: ['Gaming Chair', 'A future verified listing will include dimensions, weight support, materials, warranty, price, retailer, and an affiliate disclosure.'],
    controller: ['Gaming Controller', 'A future verified listing will include platform support, connection type, battery details, price, retailer, and an affiliate disclosure.'],
    monitor: ['Gaming Monitor', 'A future verified listing will include size, resolution, refresh rate, ports, price, retailer, and an affiliate disclosure.']
  };
  const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#productModal'));
  document.querySelectorAll('.product-button').forEach((button) => {
    button.addEventListener('click', () => {
      const product = productDetails[button.dataset.product];
      document.querySelector('#productModalTitle').textContent = product[0];
      document.querySelector('#productModalText').textContent = product[1];
      modal.show();
    });
  });

  updateGear();
});
