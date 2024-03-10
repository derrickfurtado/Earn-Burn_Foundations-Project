console.log("dashboard.js connected")

const currentEarnSection = document.getElementById("current-earn")
const currentBurnSection = document.getElementById("current-burn")


// Current Earn

const createEarnTotalCard = (data) => {
    let earnTotalCard = document.createElement('div')
    earnTotalCard.classList = "currentEarnAnalysis"
    let iData = data.sum === null ? 0 : data.sum            // added in case the total is NULL and shows $0 instead. Also needed to pull out the .sum
    earnTotalCard.textContent = `$${iData}`

    currentEarnSection.append(earnTotalCard)
}

const showEarnTotal = () => {
    axios.get(`http://localhost:4040/api/getIncomeTotal`)
        .then(res => {
            console.log(res.data)
            createEarnTotalCard(res.data)
        }).catch(err => console.log(err))
}

// Current Burn

const createBurnTotalCard = (data) => {
    let burnTotalCard = document.createElement('div')
    burnTotalCard.classList = "currentBurnAnalysis"
    let iData = data.sum === null ? 0 : data.sum            // added in case the total is NULL and shows $0 instead. Also needed to pull out the .sum
    burnTotalCard.textContent = `$${iData}`

    currentBurnSection.append(burnTotalCard)
}

const showBurnTotal = () => {
    axios.get(`http://localhost:4040/api/getExpenseTotal`)
        .then(res => {
            // console.log(res.data)
            createBurnTotalCard(res.data)
        }).catch(err => console.log(err))
}


// get Debt-to-Income Ratio:


// const getIncomeTotal = () => {
//     return axios.get(`http://localhost:4040/api/getIncomeTotal`)
//         .then(res => {
//             let incomeTotal = res.data.sum
//             return incomeTotal
//         }).catch(err => console.log(err))
// }

// const getExpenseTotal = () => {
//     return axios.get(`http://localhost:4040/api/getExpenseTotal`)
//         .then(res => {
//             let expenseTotal = res.data.sum
//             return expenseTotal
//         }).catch(err => console.log(err))


// console.log(getIncomeTotal())
// console.log(getExpenseTotal())

// const debtIncomeRatioCalc = () => {

// }
        
// const createDebt_IncomeRatioCard = (data) => {
//     let debtIncomeRatioCard = document.createElement('div')

// }



showEarnTotal()
showBurnTotal()


       



