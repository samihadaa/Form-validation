'use strict'

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const button = document.getElementById('button')

button.addEventListener('click', (event)=>{
    event.preventDefault()
    checkInput()
})
function checkInput(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === ''){
        const controlForm = username.parentElement

        controlForm.classList.add('error')
        const small = controlForm.querySelector('small')
        small.innerText = 'empty user name input'
    }
    else {
        const controlForm = username.parentElement
        controlForm.classList.add('success')
    }
    if(emailValue === ''){
        const controlForm = email.parentElement
        controlForm.classList.add('error')
        const small = controlForm.querySelector('small')
        small.innerText = 'empty user name input'
    }
    else {
        const controlForm = email.parentElement
        controlForm.classList.add('success')
        small.innerText = 'empty email input'
    }
}
