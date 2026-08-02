const lock = document.getElementById('lock');
const main = document.getElementById('main');
const music = document.getElementById('music');
const dots = document.querySelectorAll('#dots span');

let value = '';

function renderDots() {
    dots.forEach((d, i) => d.textContent = i < value.length ? '●' : '');
}

document.querySelectorAll('.pad button').forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.id === 'del') {
            value = value.slice(0, -1);

        } else if (btn.id === 'ok') {

            if (value === '2705') {

                lock.style.opacity = '0';

                setTimeout(() => {

                    lock.style.display = 'none';
                    main.style.display = 'block';
                    main.style.opacity = '0';

                    requestAnimationFrame(() => {
                        main.style.transition = 'opacity .6s';
                        main.style.opacity = '1';
                    });

                    if (music) {
                        music.volume = 0.5;
                        music.play().catch(() => {});
                    }

                    flowerRain(); // <-- TAMBAHKAN INI

                }, 300);

            } else {
                alert('Password salah!\nHint: tanggal spesial 🤍');
                value = '';
            }

        } else {

            if (value.length < 4)
                value += btn.textContent.trim();

        }

        renderDots();

    });
});

renderDots();

function flowerRain() {

    setInterval(() => {

        const petal = document.createElement("img");

        petal.src = "images/sakura.jpg";
        petal.className = "sakura";

        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.width = (18 + Math.random() * 20) + "px";
        petal.style.animationDuration = (5 + Math.random() * 4) + "s";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 9000);

    }, 180);

}

function openBupp(){
    document.getElementById("buppPopup").style.display = "flex";
}

function closeBupp(){
    document.getElementById("buppPopup").style.display = "none";
}