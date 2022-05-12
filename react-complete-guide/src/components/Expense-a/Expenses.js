import "./Expenses.css";
import Card from "../../shared/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2021");

  const renderExpenseItems = () => {
    let expenses = props.expenses;
    const expenseItems = [];
    if (yearFilter !== undefined && yearFilter !== "") {
      expenses = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === yearFilter
      );
    }
    expenses.forEach((expense) => {
      expenseItems.push(
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
    return expenseItems;
  };

  const expenseYearFilterChangeHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearFilter}
        onYearFilterChange={expenseYearFilterChangeHandler}
      />
      {renderExpenseItems()}
    </Card>
  );
};

export default Expenses;
