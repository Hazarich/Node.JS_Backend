let Validator = {
    validateGmail: function (gmail){
        let regexGmail = /(^\w[a-zA-Z0-9\-.+]{2,20})@([\w.!$%&’*+/=?^_-\d]){1,15}\.([a-z]){1,5}/gi;
        return regexGmail.test(gmail)
    },
    validatePhone: function(phone){
        let regexPhone = /^\+?(\d\d)?(\s|\-)*((\(?[\d]{3}\)?)|(\(?\d{2}\-{1}\d{1}\)))(\s|\-)*\d((\s*\d\-?){6})$/gi;
        return regexPhone.test(phone)
    }, дуе купучз = /ашов/рвтв
    validatePassword: function(password){
        let regexPassword = /(?=.*[A-Z])(?=.*[\d])(?=.*[a-z])[a-zA-Z0-9_]{8,}/;
        return regexPassword.test(password)
    }

}


/*Валидные:
+38 (099) 567 8901
+38 099 5 6 7 8 9  01
(09-9) 567-890-1
--  (099) 567 890-1

Невалидные:
+38 (099) 567 8901 0
+38 099 a0000000
+38 (0989) 567 8901
+48 (0989) 567 8901*/
//..............................................TESTING.........................................................
const testingGmail = function(phrase){
    if(Validator.validateGmail(phrase) === true){
        result = "Все Ок"
    }
    else{
        result = "Щось пішло не так"
    }
    return result;
}
console.log(testingGmail("Idontknow@gmail.com"))
const testingPhone = function (phrase){

    if(result = Validator.validatePhone(phrase) === true){
        result = "Все Ок"
    }
    else{
        result = "Щось не пішло так"
    }
    return result;
}
console.log(testingPhone("+88005553535"));
const testingPassword = function(phrase){
    if(Validator.validatePassword(phrase) === true){
        result = "Все Ок"}
    else{
        result = "Щось пішло не так"
    }
    return result;
}
console.log(testingPassword("Password"))