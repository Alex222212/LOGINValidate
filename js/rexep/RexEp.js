const RexEp = {
    email : /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    password : /^[a-zA-Z0-9]+/,
}
const RexEpAuth = {
    email : /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    password : /^[a-zA-Z0-9]+/,
    text: /^([a-zA-Z]{1,10})+/,
}

 export function validate(el){
    const rexapName = el.dataset.required
    if (!RexEp[rexapName]) return true;
    return RexEp[rexapName].test(el.value)
}
export function validateAuth(el){
    const rexapName = el.dataset.required
    if (!RexEp[rexapName]) return true;
    return RexEp[rexapName].test(el.value)
}