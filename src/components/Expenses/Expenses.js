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

  return (
    <>
      <Card className="expenses">
      <ExpenseFilter selectedYear={filterDate} onFilterDate={ExpenseFilterDate}/>
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[1].title}
          amount={props.expense[1].amount}
          date={props.expense[1].date}
        />
        <ExpenseItem
          title={props.expense[2].title}
          amount={props.expense[2].amount}
          date={props.expense[2].date}
        />
        <ExpenseItem
          title={props.expense[3].title}
          amount={props.expense[3].amount}
          date={props.expense[3].date}
        />
      </Card>
    </>
  );
}

export default Expenses;
