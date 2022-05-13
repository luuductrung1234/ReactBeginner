import "./Expenses.css";
import Card from "../../shared/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

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
      <ExpenseChart expenses={props.expenses} />
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;
