import React , {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

 const NewExpense = (props) => {

  const [isShown , setIsShown] = useState(false)

  const expenseDataHandler = (retrievedData) =>{
    const expenseData = {
      ...retrievedData,
      id : Math.random().toString()
    }
    props.allExpenseData(expenseData)
  }

  const onClickHandler= () => {
    setIsShown(true)
  }

  const onCancelHandler = () => {
    setIsShown(false)
  }



  return (
    <div className="new-expense">
      {!isShown && <button onClick={onClickHandler}>Add New Expense</button>}
      {isShown && <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={onCancelHandler} /> }
    </div>
  )
}

export default NewExpense;