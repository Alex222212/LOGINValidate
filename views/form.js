
export function showErrorMsg(el){
    removeErr(el)
    const parent = el.parentNode
    const template = errorMsg(el);
    el.classList.add('is-invalid')
    parent.insertAdjacentHTML('beforeend',template)
}
export function removeErr(el){
    if (el.classList.contains('is-invalid')){
        el.classList.remove('is-invalid')
        const parent = el.parentNode
        parent.querySelector('.invalid-feedback').remove()
    }
}
export function changeForm(form){

}
function errorMsg(el) {
        return `<div class="invalid-feedback">
        Пожалуйста, введите данные
      </div>`
}
