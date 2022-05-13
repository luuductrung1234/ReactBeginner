import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleValid, setTitleValid] = useState(true);
  const [amountValid, setAmountValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  var today = new Date();
  const [date, setDate] = useState(
    today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0")
  );

  const titleChangeHandler = (event) => {
    validateTitle(event.target.value);
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    validateAmount(+event.target.value);
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    validateDate(new Date(event.target.value));
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    if (
      !validateTitle(expenseData.title) ||
      !validateAmount(expenseData.amount) ||
      !validateDate(expenseData.date)
    )
      return;
    if (props.onSave !== undefined) props.onSave(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const validateTitle = (titleData) => {
    let isValid = titleData !== undefined && titleData.trim().length > 0;
    setTitleValid(isValid);
    return isValid;
  };

  const validateAmount = (amountData) => {
    let isValid =
      amountData !== undefined && !Number.isNaN(amountData) && amountData > 0;
    setAmountValid(isValid);
    return isValid;
  };

  const validateDate = (dateData) => {
    let isValid = dateData !== undefined && dateData <= new Date();
    setDateValid(isValid);
    return isValid;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={`new-expense__control ${!titleValid && "invalid"}`}>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className={`new-expense__control ${!amountValid && "invalid"}`}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={`new-expense__control ${!dateValid && "invalid"}`}>
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
