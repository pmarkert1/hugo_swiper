class ResponsiveCarousel {
  constructor(container, items) {
      this.container = container;
      this.wrapper = container.querySelector('.carousel-wrapper');
      this.content = container.querySelector('.carousel-content');
      this.items = items;
      this.leftButton = container.querySelector('.nav-button.left');
      this.rightButton = container.querySelector('.nav-button.right');

      this.init();
  }

  init() {
      this.renderItems();
      this.addEventListeners();
  }

  renderItems() {
      this.items.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'carousel-item';
          itemElement.innerHTML = `
              <img src="${item.image}" alt="${item.title}">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
          `;
          this.content.appendChild(itemElement);
      });
  }

  addEventListeners() {
      this.leftButton.addEventListener('click', () => this.scroll('left'));
      this.rightButton.addEventListener('click', () => this.scroll('right'));
      window.addEventListener('resize', () => this.handleResize());
  }

  scroll(direction) {
      const scrollAmount = this.wrapper.offsetWidth * 0.8;
      const currentScroll = this.wrapper.scrollLeft;
      const newPosition = direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount;
      
      this.wrapper.scrollTo({
          left: newPosition,
          behavior: 'smooth'
      });
  }

  handleResize() {
      this.wrapper.scrollTo({ left: 0 });
  }
}

// Sample data
const items = [
  { image: 'https://via.placeholder.com/300x200?text=Image+1', title: 'Title 1', description: 'Description 1' },
  { image: 'https://via.placeholder.com/300x200?text=Image+2', title: 'Title 2', description: 'Description 2' },
  { image: 'https://via.placeholder.com/300x200?text=Image+3', title: 'Title 3', description: 'Description 3' },
  { image: 'https://via.placeholder.com/300x200?text=Image+4', title: 'Title 4', description: 'Description 4' },
  { image: 'https://via.placeholder.com/300x200?text=Image+5', title: 'Title 5', description: 'Description 5' },
];

// Initialize the carousel
const carouselContainer = document.querySelector('.carousel-container');
new ResponsiveCarousel(carouselContainer, items);