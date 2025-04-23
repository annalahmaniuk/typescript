// Функція для завантаження категорій
function fetchCategories() {
    fetch('categories.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var categoryList = document.getElementById('category-list');
        categoryList.innerHTML = '';
        data.forEach(function (category) {
            var link = document.createElement('a');
            link.href = '#';
            link.classList.add('category-link');
            link.addEventListener('click', function () { return fetchProducts(category.shortname); });
            var img = document.createElement('img');
            img.src = "https://place-hold.it/150x150?text=".concat(category.name);
            img.alt = category.name;
            link.appendChild(img);
            var span = document.createElement('span');
            span.textContent = category.name;
            link.appendChild(span);
            categoryList.appendChild(link);
        });
    })
        .catch(function (error) { return console.error('Error:', error); });
}
// Функція для завантаження продуктів за категорією
function fetchProducts(categoryShortname) {
    fetch("".concat(categoryShortname, ".json"))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var content = document.getElementById('content');
        content.innerHTML = '';
        var title = document.createElement('h2');
        title.textContent = categoryShortname.charAt(0).toUpperCase() + categoryShortname.slice(1);
        content.appendChild(title);
        data.forEach(function (product) {
            var productDiv = document.createElement('div');
            productDiv.classList.add('product');
            var image = document.createElement('img');
            image.src = 'https://place-hold.it/200x200';
            var name = document.createElement('h3');
            name.textContent = product.name;
            var description = document.createElement('p');
            description.textContent = product.description;
            var price = document.createElement('p');
            price.textContent = "Price: ".concat(product.price, " UAH");
            productDiv.appendChild(image);
            productDiv.appendChild(name);
            productDiv.appendChild(description);
            productDiv.appendChild(price);
            content.appendChild(productDiv);
        });
    })
        .catch(function (error) { return console.error('Error:', error); });
}
// Функція для зміни теми
function toggleTheme() {
    var themeSwitcher = document.getElementById('theme-switcher');
    themeSwitcher.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        themeSwitcher.textContent = document.body.classList.contains('dark-theme') ? 'Light Theme' : 'Dark Theme';
    });
}
// Обробники подій для навігації
function addEventListeners() {
    var homeLink = document.getElementById('home-link');
    var catalogLink = document.getElementById('catalog-link');
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        var categoryList = document.getElementById('category-list');
        var content = document.getElementById('content');
        categoryList.innerHTML = '';
        content.innerHTML = '';
        fetchCategories();
    });
    catalogLink.addEventListener('click', function (e) {
        e.preventDefault();
        var categoryList = document.getElementById('category-list');
        var content = document.getElementById('content');
        categoryList.innerHTML = '';
        content.innerHTML = '';
        fetchCategories();
    });
}
// Основна функція, що викликається після завантаження сторінки
document.addEventListener('DOMContentLoaded', function () {
    fetchCategories();
    toggleTheme();
    addEventListeners();
});
