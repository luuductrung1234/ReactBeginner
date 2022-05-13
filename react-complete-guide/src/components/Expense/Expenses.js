import "./Expenses.css";
import Card from "../../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import { getAllExpenses } from "../../services/expenseService";

const Expenses = () => {
  const [yearFilter, setYearFilter] = useState("2022");
  const [expenses, setExpenses] = useState(
    getAllExpenses({ year: yearFilter })
  );

  const expenseYearFilterChangeHandler = (selectedYear) => {
    setYearFilter(selectedYear);
    setExpenses([
      ...getAllExpenses({
        year: selectedYear,
      }),
    ]);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearFilter}
        onYearFilterChange={expenseYearFilterChangeHandler}
      />
      <ExpensesList expenses={expenses} />
    </Card>
  );
};

export default Expenses;
