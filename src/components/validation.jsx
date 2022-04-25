//функция принимает валюес значения введенное пользователем
// и проверит есть ли какая либо ошибка
const validation = (value) => {

    let errors = {};

    if(!value.name){
        errors.name = "name is required"
    } //если введеное поле пустое выдаст ошибку

    if(!value.email){
        errors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(value.email)){
        errors.email = "email is invalid"
    }// пустое поле ошибка, если почта не совпадает ошибка

    if(!value.password){
        errors.password = "password is required"
    }else if ( value.password.length < 4){
        errors.password = "password min length 4"
    } // проверка на колво символов

    return errors;
}

export default validation;
