console.log("main.js is connected")

const incomeForm = document.getElementById('incomeDataForm')
const incomeData = document.getElementById('incomeData')
const sourceData = document.getElementById('incomeSourceData')
const incomeSection = document.getElementById('incomeContainer')

const expenseForm = document.getElementById('addExpenseData')
const expenseAmount = document.getElementById('expenseData')
const expenseReason = document.getElementById('expenseName')
const expenseDueDate = document.getElementById('expenseDueDate')
const expenseSection = document.getElementById('expenseContainer')

const incomeTotalSection = document.getElementById('income-div')
const expenseTotalSection = document.getElementById('expense-div')



const pushIncomeData = (event) => {
    event.preventDefault()

    const newIncomeData = {
        incomeTotal: incomeData.value,
        incomeSource: sourceData.value
    }

    axios.post('http://localhost:4040/api/addIncome', newIncomeData)     // Works right, but BUG with DB user_id NOT NULL not showing
        .then(res => {
            // console.log("main.js res.income.data is: ", res.data)
            window.location.reload()
        }).catch(err => console.log(err))
}

const pushExpenseData = (event) => {
    event.preventDefault()

    const newExpenseData = {
        expenseTotal: expenseAmount.value,
        expenseSource: expenseReason.value,
        expenseDueDate: expenseDueDate.value
    }

    axios.post('http://localhost:4040/api/addExpense', newExpenseData)
        .then(res => {
            // console.log("main.js res.expense.data is: ", res.data)
            window.location.reload()
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
    cardDelete.classList += 'delete-btn'
    cardDelete.textContent = 'DELETE'
    cardDelete.id = 'income-delete-btn'


    let cardEdit = document.createElement('button')
    cardEdit.classList += 'edit-btn'
    cardEdit.textContent = 'EDIT'
    cardEdit.id = 'income-edit-btn'

    let cardName = document.createElement('h4')
    cardName.textContent = incomeData.source_income

    incomeCard.appendChild(cardName)
    incomeCard.appendChild(cardAmount)
    incomeCard.appendChild(cardOptions)
    cardOptions.appendChild(cardDelete)
    cardOptions.appendChild(cardEdit)

    incomeSection.appendChild(incomeCard)


    cardDelete.addEventListener('click', () => deleteIncome(incomeData.id_income))

    cardEdit.addEventListener('click', (event) => {
        const id = incomeData.id_income
        window.location.href = `./income_change.html?id=${id}`
    })
}

const showIncomeData = () => {
    axios.get('http://localhost:4040/api/getIncome')
        .then(res => {
            // console.log('main.js Income.RES.data is: ', res.data)
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
    expenseDueDate.textContent = (`Due date is: ${expenseData.due_date}`)       // !!!!! format this date later

    let expenseOptions = document.createElement('div')
    expenseOptions.classList += 'expense-options'

    let expenseDelete = document.createElement('button')
    expenseDelete.textContent = 'DELETE'
    expenseDelete.classList += 'delete-btn'
    expenseDelete.id = 'expense-delete-btn'


    let expenseEdit = document.createElement('button')
    expenseEdit.textContent = 'EDIT'
    expenseEdit.classList = 'edit-btn'
    expenseEdit.id = 'expense-edit-btn'

    let expensePaidStatus = document.createElement('button')
    expensePaidStatus.textContent = 'PAID'
    expensePaidStatus.classList = 'paid-btn'
    expensePaidStatus.id = 'expense-paid-btn'

    expenseCard.append(expenseName)
    expenseCard.append(expenseAmount)
    expenseCard.append(expenseOptions)
    expenseOptions.append(expenseDelete)
    expenseOptions.append(expenseEdit)
    expenseOptions.append(expensePaidStatus)
    expenseCard.append(expenseDueDate)

    expenseSection.append(expenseCard)

    expenseDelete.addEventListener('click', () => deleteExpense(expenseData.id_expenses))

    expensePaidStatus.addEventListener('click', () => updateStatus(expenseData.id_expenses))

    expenseEdit.addEventListener('click', () => {
        const id = expenseData.id_expenses
        window.location.href = `./expense_change.html?id=${id}`
    })
}

const showExpenseData = () => {
    axios.get('http://localhost:4040/api/getExpense')
        .then(res => {
            // console.log('main.js expense.RES.data is: ', res.data)
            res.data.forEach(createExpenseCard)
        }).catch(err => console.log(err))
}

const deleteIncome = (id) => {
    axios.delete(`http://localhost:4040/api/deleteIncome/${id}`)
        .then(res => {
            incomeSection.innerHTML = ''            // clearing all html from section to reload with next line of code
            res.data.forEach(createIncomeCard)
            window.location.reload()                    // need to reload page to show totals
            // console.log("income deleted")
        }).catch(console.log("something broke in deleteIncome"))

}

const deleteExpense = (id) => {
    axios.delete(`http://localhost:4040/api/deleteExpense/${id}`)
        .then(res => {
            expenseSection.innerHTML = ''               // clearing all html from section to reload with next line of code
            res.data.forEach(createExpenseCard)
            window.location.reload()                    // need to reload page so the totals show
            // console.log("expense deleted")
        }).catch(console.log("something broke in deleteExpense"))
}

const updateStatus = (id) => {
    axios.put(`http://localhost:4040/api/changePaidStatus/${id}`)
        .then(res => {
            alert("Paid Status has been updated")
        }).catch(err => console.log(err))
}

const createIncomeTotalCard = (incomeData) => {
    let incomeTotalCard = document.createElement('div')
    incomeTotalCard.classList = "sumOfIncome"
    let iData = incomeData.sum === null ? 0 : incomeData.sum            // added in case the total is NULL and shows $0 instead. Also needed to pull out the .sum
    incomeTotalCard.textContent = `${iData}`

    incomeTotalSection.append(incomeTotalCard)
}

const createExpenseTotalCard = (expenseData) => {
    let expenseTotalCard = document.createElement('div')
    expenseTotalCard.classList = "sumOfExpenses"
    let iData = expenseData.sum === null ? 0 : expenseData.sum          // added in case the total is NULL and shows $0 instead. Also needed to pull out the .sum
    expenseTotalCard.textContent = (`${iData}`)

    expenseTotalSection.append(expenseTotalCard)
}

const showIncomeTotal = () => {
    axios.get(`http://localhost:4040/api/getIncomeTotal`)
        .then(res => {
            // console.log("Income Total is: ", res.data)
            createIncomeTotalCard(res.data)
        }).catch(err => console.log(err))
}

const showExpenseTotal = () => {
    axios.get(`http://localhost:4040/api/getExpenseTotal`)
        .then(res => {
            createExpenseTotalCard(res.data)
            // console.log("Expense Total is: ", res.data)
        }).catch(err => console.log(err))
}


showIncomeData()
showExpenseData()

showIncomeTotal()
showExpenseTotal()

incomeForm.addEventListener('submit', pushIncomeData)
expenseForm.addEventListener('submit', pushExpenseData)