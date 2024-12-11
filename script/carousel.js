'use strict';

class Carousel {
    constructor(el) {
        this.el = el;
        this.carouselData = [
            {
                'id': '1',
                'src': '../images/Rinata.png',
                'text1': 'Артём',
                'text2': 'Владелец',
                'text3': 'Почти тоже самое, что и Илья, но намного умнее...'
            },
            {
                'id': '2',
                'src': '../images/ilya.png',
                'text1': 'Дарья',
                'text2': 'SMM',
                'text3': 'Показывает жизнь нашей кофейни в социальных сетях. Проводит розыгрыши и отвечает на вопросы и просто душа интернета нашей кофейни'
            },
            {
                'id': '3',
                'src': '../images/Artem.png',
                'text1': 'Артём',
                'text2': 'Владелец',
                'text3': 'Почти тоже самое, что и Илья, но намного умнее...'
            },
            {
                'id': '4',
                'src': '../images/dasha.png',
                'text1': 'Рината',
                'text2': 'Креативный директор',
                'text3': 'Разрабатывает яркий и запоминающийся визуальный стиль для кофейни, который будет отражать уникальность бренда и привлекать внимание потенциальных клиентов.'
            },
            {
                'id': '5',
                'src': '../images/Artem.png',
                'text1': 'Илья',
                'text2': 'Владелец',
                'text3': 'Искренний эстет, стремящийся создать уютную атмосферу, где каждый гость ощущает тепло и заботу'
            }
        ];
        this.carouselInView = [1, 2, 3, 4, 5];
        this.carouselContainer;
        this.carouselPlayState;
        this.textContainer;
    }

    mounted() {
        this.setupCarousel();
        this.play();  // Automatically start the carousel
    }

    setupCarousel() {
        const container = document.createElement('div');
        const textContainer = document.createElement('div');

        // Add container for carousel items
        this.el.append(container);
        container.className = 'carousel-container';

        // Add container for text
        const sideContainer = document.createElement('div');
        sideContainer.className = 'carousel-side-container';
        this.el.append(sideContainer);

        sideContainer.append(textContainer);
        textContainer.className = 'carousel-text';

        // Add text container for displaying text
        textContainer.innerHTML = `
        <div style="margin-top:250px">
            <div id="text1" class="carousel-text-item"></div>
            <div id="text2" class="carousel-text-item"></div>
            <div id="text3" class="carousel-text-item"></div>
        </div>
        `;

        // Take dataset array and append items to container
        this.carouselData.forEach((item, index) => {
            const carouselItem = item.src ? document.createElement('img') : document.createElement('div');

            container.append(carouselItem);

            // Add item attributes
            carouselItem.className = `carousel-item carousel-item-${index + 1}`;
            carouselItem.src = item.src;
            carouselItem.setAttribute('loading', 'lazy');
            carouselItem.setAttribute('data-index', `${index + 1}`);
        });

        // Set container property
        this.carouselContainer = container;
        this.textContainer = textContainer;

        // Update text for the first carousel item
        this.updateText();
    }

    previous() {
        this.carouselData.unshift(this.carouselData.pop());
        this.carouselInView.push(this.carouselInView.shift());
        this.carouselInView.forEach((item, index) => {
            this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
        });
        this.carouselData.slice(0, 5).forEach((data, index) => {
            document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
        });
        this.updateText();
    }

    next() {
        this.carouselData.push(this.carouselData.shift());
        this.carouselInView.unshift(this.carouselInView.pop());
        this.carouselInView.forEach((item, index) => {
            this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
        });
        this.updateText();
        this.carouselData.slice(0, 5).forEach((data, index) => {
            document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
        });
    }

    play() {
        const startPlaying = () => this.next();

        if (this.carouselPlayState) {
            clearInterval(this.carouselPlayState);
            this.carouselPlayState = null;
        } else {
            this.next();
            this.carouselPlayState = setInterval(startPlaying, 1500);
        };
    }

    updateText() {
        const currentItem = this.carouselData[0];
        document.getElementById('text1').innerText = currentItem.text1;
        document.getElementById('text2').innerText = currentItem.text2;
        document.getElementById('text3').innerText = currentItem.text3;
    }
}

// Refers to the carousel root element you want to target
const el = document.querySelector('.carousel');
// Create a new carousel object
const exampleCarousel = new Carousel(el);
// Setup carousel and methods
exampleCarousel.mounted();
