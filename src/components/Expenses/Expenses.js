import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2020");

  const ExpenseFilterDate = (filterDate) => {
    setFilterDate(filterDate);
  };

  const filteredExpense = props.expense.filter((ex) => {
    return ex.date.getFullYear().toString() === filterDate;
  });



  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filterDate}
          onFilterDate={ExpenseFilterDate}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList item={filteredExpense}/>
      </Card>
    </>
  );
}

export default Expenses;
