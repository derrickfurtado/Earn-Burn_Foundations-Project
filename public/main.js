console.log("main.js is connected")

const formData = document.getElementById('incomeDataForm')
const incomeData = document.getElementById('incomeData')
const sourceData = document.getElementById('incomeSourceData')
const incomeSection = document.getElementById('incomeContainer')

// const expenseForm = document.getElementById()
// const expenseAmount = document.getElementById()
// const expenseReason = document.getElementById()
// const expenseDueDate = document.getElementById()
const expenseSection = document.getElementById('expenseContainer')

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

const createIncomeCard = incomeData => {
    let incomeCard = document.createElement('div')
    incomeCard.classList += 'income-card'
    
    let cardAmount = document.createElement('div')
    cardAmount.classList += 'income-card-amount'
    cardAmount.textContent = incomeData.total_income

    let cardOptions = document.createElement('div')
    cardOptions.classList += 'income-options'

    let cardDelete = document.createElement('button')
    cardDelete.classList += 'income-options-delete'
    cardDelete.textContent='DELETE'

    let cardEdit = document.createElement('button')
    cardEdit.classList += 'income-options-edit'
    cardEdit.textContent = 'EDIT'

    let cardName = document.createElement('h4')
    cardName.textContent = incomeData.source_income

    incomeCard.appendChild(cardName)
    incomeCard.appendChild(cardAmount)
    incomeCard.appendChild(cardOptions)
    cardOptions.appendChild(cardDelete)
    cardOptions.appendChild(cardEdit)

    incomeSection.appendChild(incomeCard)
}

const showIncomeData = () => {
    axios.get('http://localhost:4040/api/getIncome')
    .then(res => {
        console.log('main.js Income.RES.data is: ', res.data)
        res.data.forEach(createIncomeCard)
    }).catch(err => console.log(err))
}

const createExpenseCard = expenseData => {
    let expenseCard = document.createElement('div')
    expenseCard.classList += 'expense-card'

    let expenseAmount = document.createElement('div')
    expenseAmount.classList += 'expense-card-amount'
    expenseAmount.textContent = expenseData.total_expense

    let expenseName = document.createElement('h4')
    expenseName.classList += 'expense-card-name'
    expenseName.textContent = expenseData.expense_name

    let expenseDueDate = document.createElement('div')
    expenseDueDate.classList += 'expense-card-date'
    expenseDueDate.textContent = (`Due date is: ${expenseData.due_date}`)       // format this date later

    let expenseOptions = document.createElement('div')
    expenseOptions.classList += 'expense-options'

    let expenseDelete = document.createElement('button')
    expenseDelete.textContent = 'DELETE'
    expenseDelete.classList += 'expense-options-delete'

    let expenseEdit = document.createElement('button')
    expenseEdit.textContent = 'EDIT'
    expenseEdit.classList = 'expense-options-edit'

    let expensePaidStatus = document.createElement('button')
    expensePaidStatus.textContent = 'PAID'
    expensePaidStatus.classList = 'expense-options-paid'

    expenseCard.append(expenseName)
    expenseCard.append(expenseAmount)
    expenseCard.append(expenseDueDate)
    expenseCard.append(expenseOptions)
    expenseOptions.append(expenseDelete)
    expenseOptions.append(expenseEdit)
    expenseOptions.append(expensePaidStatus)

    expenseSection.append(expenseCard)
    
}


const showExpenseData = () => {
    axios.get('http://localhost:4040/api/getExpense')
    .then(res => {
        console.log('main.js expense.RES.data is: ', res.data)
        res.data.forEach(createExpenseCard)
    }).catch(err => console.log(err))
}

showIncomeData()
showExpenseData()

formData.addEventListener('submit', pushIncomeData)