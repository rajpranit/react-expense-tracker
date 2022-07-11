import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {

  const [filterDate , setFilterDate] = useState('2020')

  const ExpenseFilterDate = filterDate =>{
      setFilterDate(filterDate)
  }

  const filteredDate = props.expense.filter((ex) => {
    return ex.date.getFullYear().toString() === filterDate;
  })

  return (
    <>
      <Card className="expenses">
      <ExpenseFilter selectedYear={filterDate} onFilterDate={ExpenseFilterDate}/>
      {filteredDate.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
      ))}
      </Card>
    </>
  );
}

export default Expenses;
