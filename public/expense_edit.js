
const expenseForm = document.getElementById('expense_change')
const expenseAdjustData = document.getElementById('newExpenseData')
const sourceAdjustedData = document.getElementById('newExpenseSource')
const newDueDate = document.getElementById('newDueDate')

const urlParams = new URLSearchParams(window.location.search)
const user_id = urlParams.get('id')
const item_id = urlParams.get('item_id')



const adjustExpenseData = (event) => {
    event.preventDefault()

    const adjustedExpenseData = {
        id: item_id,
        newTotal: expenseAdjustData.value,
        newSource: sourceAdjustedData.value,
        newDate: newDueDate.value
    }

    axios.put(`http://localhost:4040/api/changeExpense`, adjustedExpenseData)
        .then(
            alert(`Expense has been updated`),
            window.location.href = `./main.html?id=${user_id}`
        ).catch(err => console.log(err))
}







expenseForm.addEventListener('submit', adjustExpenseData)