import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const newExpenseHandler = (_) => {
    setIsLoading((currentState) => {
      console.log("reloading: " + currentState + " -> " + true);
      return true;
    });
  };
  const finishLoadExpenses = () => {
    setIsLoading((currentState) => {
      console.log("reloading: " + currentState + " -> " + false);
      return false;
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses onLoadingFinished={finishLoadExpenses} />
    </div>
  );
};

export default App;
