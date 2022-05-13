const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Laptop",
    amount: 1999,
    date: new Date(2022, 3, 20),
  },
  {
    id: "e6",
    title: "LG Monitor",
    amount: 300,
    date: new Date(2022, 4, 10),
  },
  {
    id: "e7",
    title: "TV Sony 4K",
    amount: 1040,
    date: new Date(2022, 1, 8),
  },
  {
    id: "e8",
    title: "House Rent",
    amount: 500,
    date: new Date(2022, 0, 30),
  },
  {
    id: "e9",
    title: "Travel",
    amount: 780,
    date: new Date(2022, 2, 18),
  },
];

export const getAllExpenses = (filter) => {
  let result = expenses;
  if (filter.year !== undefined && filter.year !== "") {
    result = result.filter(
      (expense) => expense.date.getFullYear().toString() === filter.year
    );
  }
  return result.sort((left, right) => right.date - left.date);
};

export const nextId = () => {
  var maxIndex = expenses
    .map((e) => e.id.slice(1))
    .sort((left, right) => right - left)[0];
  return "e" + (Number.parseInt(maxIndex) + 1);
};

export const addExpense = (expense) => {
  expenses.push({ id: nextId(), ...expense });
  console.log("save", expense);
  return expense;
};
