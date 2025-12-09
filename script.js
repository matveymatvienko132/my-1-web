console.log('JavaScript редактор завантажений!');

// Функція для анімації кнопки
function animateElement(element) {
    element.style.transform = 'scale(1.1)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 300);
}

// Показати випадкове повідомлення
function showMessage() {
    const messages = [
        "Хорошо!",
        "JavaScript працює!",
        "Ви зробили це!",
        "Код виконується!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.innerHTML = `
            <div>${randomMessage}</div>
        `;
    }
}

// Зміна кольору заголовка при кліку
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.addEventListener('click', function() {
            this.style.color = this.style.color === 'yellow' ? 'white' : 'yellow';
        });
    }
});

// Функція для відображення завантажених зображень
function displayUploadedImages() {
    const container = document.querySelector('.image-preview');
    if (container) {
        const images = container.querySelectorAll('img');
        images.forEach(img => img.remove());
        console.log('Функція відображення зображень готова!');
    }
}

// Глобальні слухачі для кнопок
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        animateElement(e.target);
    }
});