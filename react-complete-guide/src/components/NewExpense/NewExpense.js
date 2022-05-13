import { useState } from "react";
import { addExpense } from "../../services/expenseService";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (expenseToSave) => {
    const newExpense = addExpense(expenseToSave);
    if (props.onNewExpense !== undefined) props.onNewExpense(newExpense);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSave={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
