import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { getAllExpenses } from "./services/expenseService";

const App = () => {
  const [yearFilter, setYearFilter] = useState("2022");
  const [expenses, setExpenses] = useState(getAllExpenses({ year: "2022" }));

  const newExpenseHandler = (_) => {
    setExpenses([
      ...getAllExpenses({
        year: yearFilter,
      }),
    ]);
  };

  const loadExpensesHandler = (selectedYear) => {
    setYearFilter(selectedYear);
    setExpenses([
      ...getAllExpenses({
        year: selectedYear,
      }),
    ]);
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses
        selectedYear={yearFilter}
        expenses={expenses}
        onChanged={loadExpensesHandler}
      />
    </div>
  );
};

export default App;
