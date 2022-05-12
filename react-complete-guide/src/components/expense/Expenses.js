import "./Expenses.css";
import Card from "../../shared/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  let expensesItems = [];
  props.expenses.forEach((expense) => {
    expensesItems.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return <Card className="expenses">{expensesItems}</Card>;
};

export default Expenses;
