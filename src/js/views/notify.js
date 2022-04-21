function templateContainer(){
    return `<div class='notify-container' style='position:fixed; top:10px; right:10px; z-index:5'></div>`
}
function createContainer(){
    const container = templateContainer();
    document.body.insertAdjacentHTML('afterbegin', container)
}
function getContainer(){
    return document.querySelector('.notify-container')
}
function alertTemplate(msg, className, index){
    return `<div class="alert ${className}" data-index="${index}">
    ${msg}
  </div>`
}
function getIndex(){
    return document.querySelectorAll('.notify-container .alert').length
}
function closeAlert(index){
    let alert;
    if(index===undefined) return;
    alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`)
    const container = getContainer();
    container.removeChild(alert)
}
export default function showAllert({
    msg = 'some message',
    className = '',
    timeout = 3000,
}){
    if(!getContainer()){
        createContainer()
    }
    let index = getIndex();
    const alertMsg= alertTemplate(msg, className, index);
    const container = getContainer();
    container.insertAdjacentHTML('afterbegin', alertMsg)
    setTimeout(()=>closeAlert(index),timeout)
}