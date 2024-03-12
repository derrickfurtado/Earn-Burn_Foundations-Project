


Earn & Burn:



INTRODUCTION: This is a monthly financial planner. The purpose of this project is to enable a user to easily input and edit simple personal financial data and get a quick snapshot of their financial position so the user can make well-informed decisions when planning their month. This is a full-stack application built with the following technology and libraries:

- HTML
- CSS
- Javascript
- Node.js
- Express
- Axios
- Sequelize
- PostgreSQL

RHYME AND REASON: I built this project as a reflection of what I needed to be aware of while quitting my job and starting a bootcamp. Moving from two-income, well earning, household to a single-income household requires a bit of "oversight". There is an immediate need to understand the mechanics of what we buy, what we make, and what we decide to do next and this application makes it easy to keep track of those things on the fly and not being restricted to a spreadsheet. 

** My spreadsheet is really dope though **


FRONT END INSTRUCTIONS:

1. Head to REGISTER HERE and create a username and password.
2. Log into main page.
    - Each user will only see the financial data they have submittedd.
3. Input figures under EARN (income total and the source of that income)
    - EARN will represent your income sources.
    - Apply all necessary
4. Input figures under BURN (total expense, the reason for it, and any due date if applicable)
    - BURN will represent the things you pay for
    - Apply all necessary
5. All entries will be represented under their respective columns
6. Reference Anlytics portion at the bottom:
    - Total Earn will be a summary of income
    - Total Burn will be a summary of expenses
    - Total Runway will be the difference between the two showing "how much budget is remaining"
    - Unpaid Debt will be the total of all debt that has not been indicated as PAID
7. Edit or Delete items as necessary and reporting will reflect
8. Click PAID to change the status of each expense and the Unpaid Debt analysis will reflect accordingly.

BACK END LOGIC:
1. The login process is not very secure and susceptible to SQL injection. Using Jscript, I was able to keep all the data entry and queries user-dependent

Learning Experience:
1. During the first half of this bootcamp, I've struggled with completely understanding callback functions and PostgreSQL queries and how they interact with the front end. This project allowed me to hammer in these endpoints over and over again until I better understand them.
2. I couldn't point out a particularly hard aspect of this build, but what I can say is that the difficult spots kept coming throughout the build. I started with the framework of each file and slowly built in features. Some features would be more challenging than others, but "walking the path" for each one helps me understand what to pivot to next.
3. It got really fun once the CSS styling was up. I could really drill into each feature and refine the look, feel, and functionality of them to fit the overall goal.

NEXT FOCUS:
1. 


































ROADMAP:

Top 3 MVP needs:

1. ✅ User can set up an account with username/password and log into the main webpage.
2. ✅ User can submit income and expense line items and reflects on main page.
3. ✅ User can delete income/expense line items


Secondary MVP needs:

1. ✅ User can view analytics of data entered
2. ✅ User can sign out of account and return to login screen
3. ✅ All MVP needs have to be user-dependent

Tertiary MVP needs:

1. 🚧 User can update password
2. 🚧 User data resets every calendar month
3. 🚧 All historical data can be referrenced using links to other pages


PROCESS:

1. ✅ Build out backend set up
2. ✅ Build each feature backend to frontend, one at a time.
    - ✅ Build login feature
    - ✅ Build Income entry feature
    - ✅ Build Expenses entry feature
    - ✅ Build Delete features for both
    - ✅ Edit function
    - ✅ PAID Function
    - ✅ Build totaling function
3. Once all Top MVP features are built, build in styling.
    - ✅ Style Login page
    - ✅ style main page
4. 🚧 Once styling is done, build Analytics page.
    - 🚧 Build sections for each
        - 🚧 Debt-to-Income Ratio
        - 🚧 % remaining in budget
        - 🚧 % spent of budget
        - ✅ Current Earn
        - ✅ Current Burn
        - ✅ Remaining Budget
        - ✅ Remaining Unpaid
        - ✅ Wiggle Room
    - Style Analytics page