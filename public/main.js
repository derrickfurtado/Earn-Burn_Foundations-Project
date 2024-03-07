console.log("main.js is connected")

const formData = document.getElementById('incomeDataForm')
const incomeData = document.getElementById('incomeData')
const sourceData = document.getElementById('incomeSourceData')
const incomeSection = document.getElementById('incomeContainer')

const pushIncomeData = (event) => {
    event.preventDefault()

    const newIncomeData = {
        incomeTotal: incomeData.value,
        incomeSource: sourceData.value
    }

    axios.post('http://localhost:4040/api/addIncome',newIncomeData)     // Works right, but BUG with DB user_id NOT NULL not showing
        .then(res => {
            console.log("main.js res data is: ", res.data)
        }).catch(err => console.log(err))
}

const createIncomeCard = income => {
    let cardAmount = document.createElement('div')
    cardAmount.classList += 'income-card-amount'

    let cardSource = document.createElement('div')
    cardSource.classList += 'income-card-source'

    let cardDelete = document.createElement('button')
    cardDelete.classList += 'income-delete'

    let cardEdit = document.createElement('button')
    cardEdit.classList += 'income-edit'
}

const showIncomeData = () => {
    axios.get('http://localhost:4040/api/getIncome')
    .then(res => {
        console.log('main.js RES is: ', res.data)
        res.data.forEach(createCard)
    })
}




formData.addEventListener('submit', pushIncomeData)