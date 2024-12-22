window.onload = function() { //событие. после загрсайта
    const hamburger = document.getElementById('hamburger');
    hamburger.onclick = function() {
        let topNav = document.getElementById('myTopnav');
        if(topNav.className === 'responsive')
         {
            topNav.className = '';
        } 
        else 
        {
            topNav.className = 'responsive';
        }
    }
    const menuList = document.querySelectorAll('.menu-element');
    menuList.forEach(function(element) { //принимает значение всех эле-ментов
        element.addEventListener('click', function(event) {
            const elementLink = element.dataset.link; //счит.рибут data у э-т по кот-му щёлкнули

            if (elementLink) {
                //прерыв.стд.поведение ссылки.
            event.preventDefault();
            
            document.getElementById(elementLink).scrollIntoView({behavior: 'smooth'}); //планвая прокрутка к эл-у
            }
        });
    });
}

