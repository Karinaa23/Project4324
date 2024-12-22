$(document).ready(() => {
    const data = JSON.parse(jsonData); 
    drawCards(data);  

    // Обработчик для кнопки поиска
    $('.search-do').on('click', () => {
        const search = $('.search-text').val().toLowerCase();  // Получаем текст из поля поиска
        filter(search, data);  // Выполняем фильтрацию по введенному значению
    });
    initCardsHandler(data);  // Передаем data как аргумент при инициализации обработчиков
});

// Функция для привязки обработчиков к тегам на карточках
function initCardsHandler(data) {  // Принимаем data как параметр
    $('.blog-tags a').off().on('click', (e) => {
        e.preventDefault();  // Отменяем стандартное поведение ссылки
        const search = $(e.currentTarget).text().toLowerCase();  // Получаем текст тега
        filter(search, data);  // Выполняем фильтрацию по тегу
    });
}

function drawCards(data) {
    $('.blog-container').html('');  // Очищаем контейнер перед отрисовкой новых карточек
    data.forEach((item, i) => {
        let card = $(cardHtml);  // Создаем новую карточку
        card.find('.blog-cover').css('background-image', 'url("./' + item.image + '")');
        card.find('.blog-title h2').text(item.title); 
        card.find('.blog-text p').text(item.text);  
        card.find('.blog-published-date').text(item.date);  
        let tags = '';
        item.tags.forEach((tag) => {
            tags += '<li><a href="#">' + tag + '</a></li>';  // Создаем теги
        });
        card.find('.blog-tags ul').html(tags);  // Вставляем теги в карточку

        $('.blog-container').append(card);  // Добавляем карточку в контейнер
    });
}

// Функция для фильтрации данных по введенному значению
function filter(value, data) {
    // Фильтруем данные, проверяя наличие значения в разных полях
    const newData = data.filter((item) => {
        let result = 0;
        // Проверяем, содержится ли значение в полях карточки
        result += item.image.toLowerCase().indexOf(value) > -1;
        result += item.title.toLowerCase().indexOf(value) > -1;
        result += item.text.toLowerCase().indexOf(value) > -1;
        result += item.date.toLowerCase().indexOf(value) > -1;
        
        // Проверяем, содержится ли значение в тегах
        result += item.tags.filter((tag) => {
            return tag.toLowerCase().indexOf(value) > -1;
        }).length;

        // Если хотя бы одно совпадение, то элемент проходит фильтрацию
        return result > 0;
    });
    drawCards(newData);  // Отрисовываем отфильтрованные данные
    initCardsHandler(newData);  // Перепривязываем обработчики для новых карт
}


const jsonData = `[
     {
        "image": "blog/b2.jpg",
        "title": "Кофе с молоком: искусство приготовления",
        "text": "Как правильно приготовить кофе с молоком, чтобы получить идеальный вкус и текстуру.",
        "date": "2 дня назад",
        "tags": ["coffee", "latte", "milk"]
    },
    {
        "image": "blog/b1.jpg",
        "title": "Как выбрать лучший кофе для дома",
        "text": "Полезные советы по выбору кофе в зернах, чтобы наслаждаться им в домашних условиях.",
        "date": "3 дня назад",
        "tags": ["coffee", "home brewing", "espresso"]
    },
    {
        "image": "blog/b3.jpg",
        "title": "Что такое флет уайт и как его приготовить",
        "text": "Узнайте, как сделать флет уайт дома и какие особенности у этого напитка.",
        "date": "4 дня назад",
        "tags": ["coffee", "flat white", "espresso"]
    },
    {
        "image": "blog/b4.jpg",
        "title": "Пить кофе без сахара: полезно ли это?",
        "text": "Разбираемся, какие преимущества и недостатки могут быть у кофе без сахара.",
        "date": "1 день назад",
        "tags": ["coffee", "sugar-free", "health"]
    },
    {
        "image": "blog/b5.jpg",
        "title": "Чашка кофе и хорошая книга: идеальное сочетание",
        "text": "Как выбрать книгу, которая идеально подойдет к чашечке ароматного кофе. Мы расскажем, какие жанры и книги лучше всего читать, наслаждаясь любимым напитком.",
        "date": "6 дней назад",
        "tags": ["coffee", "book", "reading", "literature"]
    },
    {
        "image": "blog/b6.jpg",
    "title": "Музыка, книги и кофе: как выбрать идеальный плейлист для чтения",
    "text": "Как музыка влияет на наше восприятие кофе и книг? Мы расскажем, какие жанры музыки лучше всего сопровождают чтение книги с чашечкой ароматного кофе.",
    "date": "1 день назад",
    "tags": ["coffee", "music", "book", "reading"]
    },
    {
        "image": "blog/b7.jpg",
        "title": "Всё о чае: от черного до зеленого",
        "text": "Чай – это не просто напиток, это целая культура. Узнайте, какие виды чая существуют, как правильно заваривать каждый из них и какие полезные свойства они имеют.",
        "date": "5 дней назад",
        "tags": ["tea", "green tea", "black tea", "health"]
    }
]`;

// Шаблон карточки
const cardHtml = `
<section class="blog-card">
    <div class="blog-header">
        <div class="blog-cover"></div>
    </div>
    <div class="blog-body">
        <div class="blog-title"><h2></h2></div>
        <div class="blog-text"><p></p></div>
        <div class="blog-tags"><ul></ul></div>
        <div class="blog-footer">
            <div class="blog-published-date"></div>
        </div>
    </div>
</section>`;
