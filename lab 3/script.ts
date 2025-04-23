// Типи для категорій і товарів
interface Category {
  id: number;
  name: string;
  shortname: string;
  notes: string;
}

interface Product {
  name: string;
  description: string;
  price: number;
}

// Функція для завантаження категорій
function fetchCategories(): void {
  fetch('categories.json')
    .then((response) => response.json())
    .then((data: Category[]) => {
      const categoryList = document.getElementById('category-list') as HTMLElement;
      categoryList.innerHTML = '';

      data.forEach((category) => {
        const link = document.createElement('a');
        link.href = '#';
        link.classList.add('category-link');
        link.addEventListener('click', () => fetchProducts(category.shortname));

        const img = document.createElement('img');
        img.src = `https://place-hold.it/150x150?text=${category.name}`;
        img.alt = category.name;

        link.appendChild(img);
        const span = document.createElement('span');
        span.textContent = category.name;
        link.appendChild(span);

        categoryList.appendChild(link);
      });
    })
    .catch((error) => console.error('Error:', error));
}

// Функція для завантаження продуктів за категорією
function fetchProducts(categoryShortname: string): void {
  fetch(`${categoryShortname}.json`)
    .then((response) => response.json())
    .then((data: Product[]) => {
      const content = document.getElementById('content') as HTMLElement;
      content.innerHTML = '';
      const title = document.createElement('h2');
      title.textContent = categoryShortname.charAt(0).toUpperCase() + categoryShortname.slice(1);
      content.appendChild(title);

      data.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        const image = document.createElement('img');
        image.src = 'https://place-hold.it/200x200';
        const name = document.createElement('h3');
        name.textContent = product.name;
        const description = document.createElement('p');
        description.textContent = product.description;
        const price = document.createElement('p');
        price.textContent = `Price: ${product.price} UAH`;

        productDiv.appendChild(image);
        productDiv.appendChild(name);
        productDiv.appendChild(description);
        productDiv.appendChild(price);
        content.appendChild(productDiv);
      });
    })
    .catch((error) => console.error('Error:', error));
}

// Функція для зміни теми
function toggleTheme(): void {
  const themeSwitcher = document.getElementById('theme-switcher') as HTMLElement;
  themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    themeSwitcher.textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
  });
}

// Обробники подій для навігації
function addEventListeners(): void {
  const homeLink = document.getElementById('home-link') as HTMLElement;
  const catalogLink = document.getElementById('catalog-link') as HTMLElement;

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    const categoryList = document.getElementById('category-list') as HTMLElement;
    const content = document.getElementById('content') as HTMLElement;
    categoryList.innerHTML = '';
    content.innerHTML = '';
    fetchCategories();
  });

  catalogLink.addEventListener('click', (e) => {
    e.preventDefault();
    const categoryList = document.getElementById('category-list') as HTMLElement;
    const content = document.getElementById('content') as HTMLElement;
    categoryList.innerHTML = '';
    content.innerHTML = '';
    fetchCategories();
  });
}

// Основна функція, що викликається після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  fetchCategories();
  toggleTheme();
  addEventListeners();
});
