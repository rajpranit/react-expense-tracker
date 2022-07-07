import React , {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () =>{

    const [newTitle , setNewTitle] = useState("")
    const [newAmount , setNewAmount] = useState("")
    const [newDate , setNewDate] = useState("")

    const titleChangeHandler = event =>{
        setNewTitle(event.target.value)
    };

    const amountChangeHandler = event =>{
        setNewAmount(event.target.value)
    };

    const dateChangeHandler = event =>{
        setNewDate(event.target.value)
    };

    return (
        <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min={"0.01"} step={"0.01"} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min={"2019-01-01"} max={"2022-12-30"} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

    )
}

export default ExpenseForm;