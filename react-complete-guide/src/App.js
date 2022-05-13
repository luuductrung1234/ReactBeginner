import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const newExpenseHandler = (_) => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses />
    </div>
  );
};

export default App;
