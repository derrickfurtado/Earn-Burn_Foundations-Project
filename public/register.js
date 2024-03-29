console.log("register.js connected")

// need to select inputs, get values of inputs, and send .POST to endpoints server.js

const registerForm = document.getElementById('userRegisterForm')
const newUserName = document.getElementById('createUser')
const newUserPassword = document.getElementById('createPassword')

const createNewAccount = (event) => {// create function that will make request
    event.preventDefault()

    const newAccount = {
        name: newUserName.value,
        password: newUserPassword.value
    }

    axios.post('http://localhost:4040/api/register', newAccount)
        .then(res => {
            console.log(res.data)
            window.location.href='./index.html'
        })
        .catch(err => console.log(err))
} 

registerForm.addEventListener('submit', createNewAccount)