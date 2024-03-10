console.log("index.js connected")

const loginForm = document.getElementById('userLoginForm')
const userLogin = document.getElementById('userInput')
const passwordLogin = document.getElementById('passwordInput')


const loginAction = (event) => {
    event.preventDefault()

    const loginProcess = {
        name: userLogin.value,
        password: passwordLogin.value
    }

    axios.post('http://localhost:4040/api/login',loginProcess)
    .then(res => {
        // console.log(res.data[0].id)
        const id = res.data[0].id
        window.location.href=`./main.html?id=${id}`
    }).catch(err => alert("Username or password is incorrect"))
}


loginForm.addEventListener('submit', loginAction)