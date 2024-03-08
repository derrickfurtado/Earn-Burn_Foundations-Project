console.log("edit.js connected")

const incomeForm = document.getElementById('income_change')
const incomeAdjustData = document.getElementById('newIncomeData')
const sourceAdjustData = document.getElementById('newIncomeSource')



const urlParams = new URLSearchParams(window.location.search)
const urlId = urlParams.get('id')
console.log("urlId of item from main page: ", urlId)


const adjustIncomeData = (event) => {
    event.preventDefault()

    const adjustedIncomeData = {
        id: urlId,
        newTotal: incomeAdjustData.value,
        newSource: sourceAdjustData.value
    }
    axios.put(`http://localhost:4040/api/changeIncome`, adjustedIncomeData)
        .then(
            alert(`Income has been updated`),
            window.location.href = './main.html'
        )
}







incomeForm.addEventListener('submit', adjustIncomeData)


