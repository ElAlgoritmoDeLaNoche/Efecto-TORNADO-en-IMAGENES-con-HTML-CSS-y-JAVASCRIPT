function tornadoImagen() {

    let tornado = document.createElement('span');
    let size = Math.random() * 200;
    let section = document.querySelector('section');

    let images = [
        'url("img/meGusta.png")',
        'url("img/meEncanta.png")',
        'url("img/meDivierte.png")',
        'url("img/meAsombra.png")',
        'url("img/meEntristece.png")',
        'url("img/meEnoja.png")',
    ];

    tornado.style.top = Math.random() * innerWidth + 'px';

    let backgrund = images[Math.floor(Math.random() * images.length)];

    tornado.style.width = 50 + size + 'px';
    tornado.style.height = 50 + size + 'px';
    tornado.style.backgroundImage = backgrund;

    section.appendChild(tornado);

    setTimeout(() => {
        tornado.remove();
    }, 6000);

}