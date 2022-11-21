window.addEventListener(`load`, () =>{
    const progress =document.getElementById('progress')
    requestAnimationFrame(update)
})
function update(){
    progress.style.width=`${(window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100}%`
    requestAnimationFrame(update)
}

const $form = document.getElementById('form');
const $botoncito = document.getElementById('botoncito');
$form.addEventListener('submit', () => {

}) 