import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import inputsValue from './config/config'
import {validate} from './rexep/RexEp'
import {showErrorMsg, removeErr} from './views/form'
const {form, inputEmail, inputPassword} = inputsValue
const inputs = [inputEmail,inputPassword]
form.addEventListener('submit',e =>{
    e.preventDefault();
    omFormSubmit()
})
function omFormSubmit() {
    const isValid=inputs.every(el =>{
        const isValidInput = validate(el);
        console.log(isValidInput);
        if (!isValidInput){
            return showErrorMsg(el)
        }
        removeErr(el)
        return isValidInput
    })

}