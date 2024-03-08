console.log("income_change.js connected")

const formData = document.getElementById('incomeChange')
const incomeAdjustData = document.getElementById('newIncomeData')
const sourceAdjustData = document.getElementById('newIncomeSource')

const urlParams = new URLSearchParams(window.location.search)
const urlId = urlParams.get('id')
console.log("id of item from main page: ", urlId)


const adjustIncomeData = (event) => {
    event.preventDefault()

    const adjustedIncomeData = {
        id: urlId,
        newTotal: incomeAdjustData.value,
        newSource: sourceAdjustedData.value
    }
    axios.put(`http://localhost:4040/api/changeIncome`, adjustedIncomeData)
        .then()
}

const adjustExpenseData = (event) => {
    axios.put(`http://localhost:4040/api/changeExpense`)
}

