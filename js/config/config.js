
const inputsValue = {
    formLog : document.forms['loginForm'],
    inputEmail : document.getElementById('email'),
    inputPassword: document.getElementById('password'),
}
const authValue={
    formAuth : document.forms['AuthForm'],
    authInputEmail : document.getElementById('auth-email'),
    authPassword : document.getElementById('auth-password'),
    authNickName : document.getElementById('auth-NickName'),
    authFirstName : document.getElementById('auth-firstName'),
    authLastName : document.getElementById('auth-lastName'),
    authPhone : document.getElementById('auth-phone'),
    authGenderMAle : document.getElementById('genderChoise'),
    authCountry : document.getElementById('auth-country'),
    authCity : document.getElementById('auth-city'),
    authDate : document.getElementById('auth-date'),
    authMonth : document.getElementById('auth-month'),
    authYear : document.getElementById('auth-year'),
}
const forms={
    loginForm: document.querySelector('.login-form-wrap'),
    authForm: document.querySelector('.auth-form-wrap')
}
const chouseAuth = {
    li: document.links,
    signIn: document.querySelector('.signIn'),
    signUp: document.querySelector('.signUp')
}
export default {inputsValue, chouseAuth, authValue, forms}
