// Пример массива товаров
const products = [
    {
        id: 1,
        name: "Шоколадно-трюфельный торт с медовым вкусом",
        category: "cakes",
        description: "Насыщенный шоколадный крем, на темном бисквите с нотками какао.",
        price: "249₽",
        images: ["https://via.placeholder.com/300x200?text=Cake+1"]
    },
    {
        id: 2,
        name: "Печенье с изюмом",
        category: "cookies",
        description: "Домашнее печенье с добавлением изюма.",
        price: "99₽",
        images: ["https://via.placeholder.com/300x200?text=Cookie+1"]
    },
    {
        id: 3,
        name: "Чай зелёный",
        category: "drinks",
        description: "Ароматный зелёный чай.",
        price: "79₽",
        images: ["https://via.placeholder.com/300x200?text=Drink+1"]
    }
];

let categorySelect = "all";  // Начальное значение категории - все товары

// Функция для фильтрации товаров
function filterProducts() {
    const filtered = products.filter(product =>
        (categorySelect === "all" || product.category === categorySelect)  // Фильтрация по категории
    );
    renderProducts(filtered);  // Отображаем отфильтрованные товары
}

// Функция для рендеринга товаров
function renderProducts(productsToRender) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = "";  // Очищаем контейнер перед рендером

    productsToRender.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <button onclick="showDetails(${product.id})">подробнее</button>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Функция для фильтрации товаров по категории (при клике на кнопку)
function filterProductsByCategory(category) {
    categorySelect = category;  // Устанавливаем выбранную категорию
    filterProducts();  // Выполняем фильтрацию
}

// Изначально показываем все товары
filterProducts();

// Функция для отображения подробностей товара (пока просто выводим в консоль)
function showDetails(id) {
    console.log("Показать детали товара с id:", id);
}
