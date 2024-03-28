const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    const triggerbutton = window.innerHeight / 1.24;
    boxes.forEach(box => {
        let boxtop = box.getBoundingClientRect().top;
        if(boxtop < triggerbutton){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    });    
})