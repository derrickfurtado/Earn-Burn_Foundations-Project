console.log("main.js is connected")

const formData = document.getElementById('incomeDataForm')
const incomeData = document.getElementById('incomeData')
const sourceData = document.getElementById('incomeSourceData')

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


formData.addEventListener('submit', pushIncomeData)