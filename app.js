import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import config from './config/config'
import {validate, validateAuth} from './rexep/RexEp'
import {showErrorMsg, removeErr} from './views/form'
import Auth from './services/apiService';
import showAllert from './views/notify';
import authLog from './services/loginService';
import getCountry from './services/getcountry';
import $ from 'jquery'
import '../../jquery-ui-1.13.1.custom/jquery-ui'
import '../../jquery-ui-1.13.1.custom/jquery-ui.min.css'




const {formAuth, authInputEmail, authPassword, authNickName, authFirstName, authLastName, authPhone, authGenderMAle, authCountry, authCity, authDate, authMonth, authYear}= config.authValue
const {formLog, inputEmail, inputPassword} = config.inputsValue
const {li, signIn, signUp} = config.chouseAuth;
const inputs = [inputEmail,inputPassword]
const authInputs = [authInputEmail, authPassword, authNickName, authFirstName, authLastName, authPhone, authGenderMAle, authCountry, authCity, authDate, authMonth, authYear]

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
formAuth.addEventListener('submit',e=>{
    e.preventDefault();
    onAuthFormSubmit()
})
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
async function onAuthFormSubmit(){
    const isValid=authInputs.every(el =>{
        const isValidInput = validateAuth(el);
        if (!isValidInput){
            return showErrorMsg(el)
        }
        removeErr(el)
        return isValidInput
    })

    if (!isValid) return;
    try {
        await authLog(authInputEmail.value, authPassword.value, authNickName.value, authFirstName.value, authLastName.value, authPhone.value, authGenderMAle.value, authCountry.value, authCity.value, authDate.value, authMonth.value, authYear.value)
    } catch (error) {
        
    }
}
$(function( ){
   const country = getCountry();
    $('#auth-country').autocomplete({
        source: country
    })
})
async function init(){
    const country = await getCountry();
    $(function( ){
         $('#auth-country').autocomplete({
             source: country
         })
     })
}
init()
