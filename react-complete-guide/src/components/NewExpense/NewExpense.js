import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseToSave) => {
    const newExpense = {
      ...expenseToSave,
      id: Math.random().toString(),
    };
    if (props.onNewExpense !== undefined) props.onNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
