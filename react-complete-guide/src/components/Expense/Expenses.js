import "./Expenses.css";
import Card from "../../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const expenseYearFilterChangeHandler = (selectedYear) => {
    props.onChanged(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={props.selectedYear}
        onYearFilterChange={expenseYearFilterChangeHandler}
      />
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;
