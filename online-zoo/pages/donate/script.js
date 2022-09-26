const dots = document.querySelectorAll('.count__dot');
const labels = document.querySelectorAll('.sum');

function changeLabelColor() {
    for (let i =0; i< dots.length; i++) {
        if(dots[i].checked) {
            labels[i].classList.add('active');
            labels[i].firstElementChild.classList.add('active');
        } else {
            labels[i].classList.remove('active');
            labels[i].firstElementChild.classList.remove('active');
        }
    }
}

dots.forEach(dot => {
    dot.addEventListener('click', changeLabelColor);
})