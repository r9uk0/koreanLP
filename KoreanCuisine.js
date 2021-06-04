var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') != -1 ||
    userAgent.indexOf('trident') != -1) {
    window.location.replace("https://aruruaruruaruru.github.io/koreanCuisine/ie/index.html");
}

let slideChg = function() {
    topSlide = document.getElementById('topSlide');
    topSlide.classList.remove('topImg0' + i);
    if (i == 5) {
        i = 1;
    } else {
        i++;
    }
    topSlide.classList.add('topImg0' + i);
};
let i = 1;
let topSlide = document.getElementById('topSlide');
setInterval(slideChg, 5000);


/* 到達したら要素を表示させる */
function showElementAnimation() {
    var elementY = document.getElementsByClassName('fadeinY');
    var elementXR = document.getElementsByClassName('fadeinXR');
    var elementXL = document.getElementsByClassName('fadeinXL');
    if (!elementY && !elementXR && !elementXL) return; // 要素がなければキャンセル

    var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が表示タイミング
    var scrollY = window.pageYOffset; //スクロール量取得
    var windowH = window.innerHeight; //ビューポートの高さ取得

    for (var i = 0; i < elementY.length; i++) {
        var elemClientRect = elementY[i].getBoundingClientRect();
        var elemY = scrollY + elemClientRect.top;
        if (scrollY + windowH - showTiming > elemY) {
            elementY[i].classList.add('isShow');
        } else if (scrollY + windowH < elemY) {
            elementY[i].classList.remove('isShow');
        }
    }
    for (var i = 0; i < elementXR.length; i++) {
        var elemClientRect = elementXR[i].getBoundingClientRect();
        var elemY = scrollY + elemClientRect.top;
        if (scrollY + windowH - showTiming > elemY) {
            elementXR[i].classList.add('isShow');
        } else if (scrollY + windowH < elemY) {
            elementXR[i].classList.remove('isShow');
        }
    }
    for (var i = 0; i < elementXL.length; i++) {
        var elemClientRect = elementXL[i].getBoundingClientRect();
        var elemY = scrollY + elemClientRect.top;
        if (scrollY + windowH - showTiming > elemY) {
            elementXL[i].classList.add('isShow');
        } else if (scrollY + windowH < elemY) {
            elementXL[i].classList.remove('isShow');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);