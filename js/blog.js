$(document).ready(() => {
    // Парсим JSON-данные
    const data = JSON.parse(jsonData);

    // Отрисовываем карточки
    drawCards(data);

    // Инициализируем обработчик для поиска
    $('.search-do').on('click', () => {
        const search = $('.search-text').val().trim().toLowerCase(); // Получаем и нормализуем текст поиска
        filter(search, data); // Фильтруем данные
    });

    // Инициализация обработчиков тегов
    initTagsHandler(data);
});

// Функция для создания карточек
function drawCards(data) {
    const container = $('.blog-container');
    container.empty(); // Очищаем контейнер перед созданием новых карточек

    // Генерируем карточки из данных
    data.forEach((item) => {
        const card = `
        <div class="blog-card">
            <div class="blog-header">
                <div class="blog-cover" style="background-image: url('${item.image}');"></div>
            </div>
            <div class="blog-body">
                <div class="blog-title"><h2>${item.title}</h2></div>
                <div class="blog-text"><p>${item.text}</p></div>
                <div class="blog-tags">
                    <ul>
                        ${item.tags.map((tag) => `<li><a href="#" class="tag-link">${tag}</a></li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="blog-footer">
                <div class="blog-published-date">${item.date}</div>
            </div>
        </div>`;
        container.append(card); // Добавляем карточку в контейнер
    });

    // Перепривязываем обработчики тегов после генерации карточек
    initTagsHandler(data);
}

// Функция для фильтрации данных
function filter(query, data) {
    const filteredData = data.filter((item) => {
        return (
            item.title.toLowerCase().includes(query) ||
            item.text.toLowerCase().includes(query) ||
            item.date.toLowerCase().includes(query) ||
            item.tags.some((tag) => tag.toLowerCase().includes(query))
        );
    });

    // Обновляем карточки и обработчики тегов
    drawCards(filteredData);
}

// Функция для инициализации обработчиков тегов
function initTagsHandler(data) {
    $('.tag-link').off('click').on('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const tag = $(this).text().toLowerCase(); // Получаем текст тега
        filter(tag, data); // Фильтруем данные по тегу
    });
}

// JSON-данные
const jsonData = `[ 
    {
        "image": "images/1.png",
        "title": "Дома в Симс 4 для больших семей",
        "text": "В этой статье мы предоставим вам несколько файлов с готовыми домами для игры в Симс 4 с большими семьями.",
        "date": "3 дня назад",
        "tags": ["строительство", "моды", "доп.контент", "сюжеты"]
    },
    {
        "image": "images/2.jpg",
        "title": "Челлендж '100 детей'",
        "text": "Если вам надоела обычная игра за среднестатистическую семью, предлагаем вам поэкспериментировать. В этой статье мы расскажем вам о всех нюансах данного челленджа.",
        "date": "1 месяц назад",
        "tags": ["челлендж", "сюжеты", "100 детей", "интересное"]
    },
    {
        "image": "images/3.jpg",
        "title": "Набор одежды для тоддлеров",
        "text": "Помимо базовой одежды для тоддлеров и различных дополнений, можно установить в CAS несколько модов. Они разнообразят вашу игру и добавят реалистичности.",
        "date": "1 год назад",
        "tags": ["доп.контент", "тоддлеры", "одежда", "моды"]
    },
    {
        "image": "images/4.png",
        "title": "Обновление 1.32.321.432",
        "text": "В статье вся информация по поводу будущего обновления, а также дата выхода.",
        "date": "1 день назад",
        "tags": ["обновление", "базовая игра"]
    },
    {
        "image": "images/5.jpg",
        "title": "Кафе 'Дендрарий'",
        "text": "Если вы любите играть за экологичных и любящих природу симов, это кафе для вас.",
        "date": "6 месяцев назад",
        "tags": ["строительство", "сюжеты", "инфраструктура", "моды"]
    },
    {
        "image": "images/6.jpeg",
        "title": "Династия",
        "text": "Для того чтобы пройти этот челлендж, нужно лишь следовать пунктам, описанным в нашей статье.",
        "date": "1 год назад",
        "tags": ["челлендж", "сюжеты", "интересное", "династия"]
    }
]`;

