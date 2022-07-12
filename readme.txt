const [isShown , setIsShown] = useState(false)

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        };
        props.onSaveExpenseData(expenseData)
        setNewTitle(" ")
        setNewAmount(" ")
        setNewDate(" ")
        setIsShown(false)
    };



    const _shown = () =>{

        setIsShown(true)
    }





    if(isShown === false){
        return <button onClick={_shown}>Add Expense</button>
    }

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
                <button type="submit">Add Expense</button>
            </div>
        </form>)