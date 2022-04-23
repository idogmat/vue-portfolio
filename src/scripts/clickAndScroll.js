var tabletMenu = document.querySelector('.mini-menu');


var linkNavMenu = document.querySelectorAll('.header-nav__ul [href^="#"]'+',.scroll-pin [href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .6;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNavMenu.length; i++) {
    linkNavMenu[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        tabletMenu.style.display = 'none';
        document.body.style.overflow = '';
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                // location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
