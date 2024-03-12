console.log("edit.js connected")

const incomeForm = document.getElementById('income_change')
const incomeAdjustData = document.getElementById('newIncomeData')
const sourceAdjustData = document.getElementById('newIncomeSource')



const urlParams = new URLSearchParams(window.location.search)
const item_id = urlParams.get('item_id')
const user_id = urlParams.get('id')



const adjustIncomeData = (event) => {
    event.preventDefault()

    const adjustedIncomeData = {
        id: item_id,
        newTotal: incomeAdjustData.value,
        newSource: sourceAdjustData.value
    }
    axios.put(`http://localhost:4040/api/changeIncome`, adjustedIncomeData)
        .then(
            window.location.href = `./main.html?id=${user_id}`
        )
}







incomeForm.addEventListener('submit', adjustIncomeData)


