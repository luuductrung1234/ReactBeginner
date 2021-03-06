import { useState } from "react";
import { addExpense } from "../../services/expenseService";
import ExpenseForm from "./ExpenseForm";
import Button from "../../custom/Button";
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
      {!isEditing && <Button onClick={startEditingHandler}>New Expense</Button>}
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
