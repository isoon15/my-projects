const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let k = 0;

function update1(){
    circles.forEach((circle,idx) => {
        if (idx < currentactive) {
            circle.classList.add('active');
        } else{
            circle.classList.remove('active');
        }
    });
    const active = document.querySelectorAll('.active');
    progress.style.width = `${k}%`;
    if (currentactive === 1) {
        prev.disabled = true;
    }else if (currentactive === circles.length){
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}

let currentactive = 1;
next.addEventListener('click', () => {
    currentactive++;
    if(currentactive > circles.length){
        currentactive = circles.length;
    }
    k = k + (100 / (circles.length - 1))

    update1();
})

prev.addEventListener('click', () => {
    currentactive--;
    if(currentactive < 1){
        currentactive = 1;
    }

    k = k -33

    update1();
})