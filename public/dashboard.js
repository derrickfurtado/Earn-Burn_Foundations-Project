console.log("dashboard.js connected")

// get Debt-to-Income Ratio:


const getIncomeTotal = () => {
    return axios.get(`http://localhost:4040/api/getIncomeTotal`)
        .then(res => {
            let incomeTotal = res.data.sum
            return incomeTotal
        }).catch(err => console.log(err))
}

const getExpenseTotal = () => {
    return axios.get(`http://localhost:4040/api/getExpenseTotal`)
        .then(res => {
            let expenseTotal = res.data.sum
            return expenseTotal
        }).catch(err => console.log(err))
}

console.log(getIncomeTotal())
console.log(getExpenseTotal())

const debtIncomeRatioCalc = () => {

}
        
const createDebt_IncomeRatioCard = (data) => {
    let debtIncomeRatioCard = document.createElement('div')

}




       


// const remainingRatio = () => {
    
// }

// const spentRatio = () => {
    
// }

// const currentEarn = () => {
    
// }

// const currentBurn = () => {
    
// }

// const remainingBudget = () => {
    
// }

// const wiggleRoom = () => {
    
// }


