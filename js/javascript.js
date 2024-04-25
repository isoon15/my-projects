let panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', function(e){
        raclass();
        panel.classList.add('active');
        e.preventDefault
    })
})
function raclass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}