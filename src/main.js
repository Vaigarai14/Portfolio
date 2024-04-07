

function animateIcon() {
    const elem = document.querySelector(".iconimage");
    elem.addEventListener("mousemove", parallax);
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.02}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

}
animateIcon();

//! skills scroller

const scroller = document.querySelectorAll('.scroller')

console.log(scroller);

if (!window.matchMedia("(prefers-reduced-motion :reduce )").matches) {
    addanimation()
}

function addanimation() {
    scroller.forEach((item) => {
        item.setAttribute("data-animated", true)
    })

    const scroll_inner = document.querySelector('.scroll_inner')

    const scroll_content = Array.from(scroll_inner.children)
    console.log(scroll_content);

    scroll_content.forEach(item => {
        const duplicateItem = item.cloneNode(true)
        duplicateItem.setAttribute('data-hidden', true)
        scroll_inner.append(duplicateItem)
    })
}


//&  Menu
document.addEventListener('DOMContentLoaded', function () {
    //^ open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    console.log(burger, menu);

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    //^ close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


// submit 

const submit = document.getElementById('submit')