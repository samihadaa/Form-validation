'use strict'

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkInput()
})
function checkInput(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    if(usernameValue === ''){
    setErrorFor(username,'Username can not be empty')
    }
    else{
    setSuccessFor(username)
    }
    if(emailValue === ''){
        setErrorFor(email,'email can not be empty')
        }
        else if(!isEmail(emailValue)){
            setErrorFor(email,'email is not valid')
        }
        else{
        setSuccessFor(email)
        }
        if(passwordValue === ''){
            setErrorFor(password,'password can not be empty')
            }
            else{
            setSuccessFor(password)
            }
            if(password2Value === ''){
                setErrorFor(password2,'password 2 can not be empty')
                }
                else if(password2Value !== passwordValue){
                    setErrorFor(password2,'password check dont match password')

                }
                else{
                setSuccessFor(password2)
                }
}
function setErrorFor(input,message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error'
}
function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
function isEmail(email){
return     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

}