import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import config from './config/config'
import {validate} from './rexep/RexEp'
import {showErrorMsg, removeErr} from './views/form'
import Auth from './services/apiService';
import showAllert from './views/notify';

const {formLog, inputEmail, inputPassword} = config.inputsValue
const {li, signIn, signUp} = config.chouseAuth;
const inputs = [inputEmail,inputPassword]


signIn.addEventListener('click',(e)=>{
    e.preventDefault();
    changeChoise(e.target);
    const stateForm= config.forms.loginForm.classList.contains('d-flex')
    if(stateForm) return;
    config.forms.loginForm.classList.remove('d-none')
    config.forms.loginForm.classList.add('d-flex')
    config.forms.authForm.classList.remove('d-flex')
    config.forms.authForm.classList.add('d-none')
})
signUp.addEventListener('click',(e)=>{
    e.preventDefault();
    changeChoise(e.target)
    const stateForm= config.forms.authForm.classList.contains('d-flex')
    if(stateForm) return;
    config.forms.authForm.classList.remove('d-none')
    config.forms.authForm.classList.add('d-flex')
    config.forms.loginForm.classList.remove('d-flex')
    config.forms.loginForm.classList.add('d-none')
})
function changeChoise(el){
    const links = [...li]
    const active = el.classList.contains('active')
    if(active) return;
    el.classList.add('active')
    links.forEach((li)=>{
        if(li!==el){
            li.classList.remove('active')
        }
    })
}
formLog.addEventListener('submit',e =>{
    e.preventDefault();
    omFormSubmit()
})
async function omFormSubmit() {
    const isValid=inputs.every(el =>{
        const isValidInput = validate(el);
        if (!isValidInput){
            return showErrorMsg(el)
        }
        removeErr(el)
        return isValidInput
    })

    if (!isValid) return;
    try {
        await Auth(inputEmail.value, inputPassword.value);
        showAllert({
            msg:'Вы успешно вошли!',
            className: 'alert-success'
        })
        formLog.reset()
    } catch (error) {
        showAllert({
            msg:'Проверьте правильность данных',
            className: 'alert-danger'
        })
    }
}