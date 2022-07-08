import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

 const NewExpense = (props) => {

  const expenseDataHandler = (retrievedData) =>{
    const expenseData = {
      ...retrievedData,
      id : Math.random().toString()
    }
    props.allExpenseData(expenseData)
  }



  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  )
}

export default NewExpense;