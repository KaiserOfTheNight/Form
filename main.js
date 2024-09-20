let email = document.getElementById("email")
let password = document.getElementById("pass")

let email_err = document.getElementsByClassName('error')[0]
let password_err = document.getElementsByClassName('error')[1]

email.addEventListener("textInput", email_verify)
password.addEventListener("textInput", password_verify)

function valid(){
    if (email.value.length < 9){
        email.style.border = "1px solid red"
        email.focus()
        email_err.style.display ="block"
        return false
    }

    if (password.value.length < 7){
        password.style.border = "1px solid red"
        password.focus()
        password_err.style.display ="block"
        return false
    }
}


function email_verify(){
    if (email.value.length >= 9){
        email.style.border = "1px solid black"
        email_err.style.display ="none"
        return true
    }
}

function password_verify(){
    if (password.value.length >= 7){
        password.style.border = "1px solid black"
        password_err.style.display ="none"
        return true
    }
}