import React , {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [newTitle , setNewTitle] = useState("")
    const [newAmount , setNewAmount] = useState("")
    const [newDate , setNewDate] = useState("")

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate: '',
    // })

    const titleChangeHandler = event =>{
        setNewTitle(event.target.value)
        // setUserInput({...userInput , enteredTitle: event.target.value})
        // setUserInput((prevState) => {
        //     return {...prevState , enteredTitle: event.target.value};
        // })
    };

    const amountChangeHandler = event =>{
        setNewAmount(event.target.value)
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value};
        // })
    };

    const dateChangeHandler = event =>{
        setNewDate(event.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
    };
    // console.log(userInput)



    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate)
        };
        props.onSaveExpenseData(expenseData)
        setNewTitle(" ")
        setNewAmount(" ")
        setNewDate(" ")
        props.onCancel()

    };


        return  (<form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={newAmount} min={"0.01"} step={"0.01"} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min={"2019-01-01"} max={"2022-12-30"} value={newDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>)


    // return (
    //     <>
    //     <div>
    //     {content}
    //     </div>
    //     {/* <form onSubmit={submitHandler}>
    //     <div className="new-expense__controls">
    //         <div className="new-expense__control">
    //             <label>Title</label>
    //             <input type="text" value={newTitle} onChange={titleChangeHandler} />
    //         </div>
    //         <div className="new-expense__control">
    //             <label>Amount</label>
    //             <input type="number" value={newAmount} min={"0.01"} step={"0.01"} onChange={amountChangeHandler} />
    //         </div>
    //         <div className="new-expense__control">
    //             <label>Date</label>
    //             <input type="date" min={"2019-01-01"} max={"2022-12-30"} value={newDate} onChange={dateChangeHandler} />
    //         </div>
    //     </div>
    //     <div className="new-expense__actions">
    //         <button type="submit">Add Expense</button>
    //     </div>
    // </form> */}
    // </>


    // )
}

export default ExpenseForm;