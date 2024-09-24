import React, { useState } from 'react';

const LightBulb = () => {
  const initialExpenses = [
    { name: "Groceries", amount: 100, dueDate: "2025-11-01", category: "personal" },
    { name: "Office Supplies", amount: 50, dueDate: "2024-05-01", category: "business" },
    { name: "Random Expense", amount: 30, dueDate: "2024-05-20", category: "misc" },
    { name: "Gym Membership", amount: 60, dueDate: "2024-06-03", category: "personal" },
    { name: "Client Lunch abc", amount: 200, dueDate: "2026-06-15", category: "business" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter the expenses by category
  const filteredExpenses = initialExpenses.filter(expense => {
    return selectedCategory === "all" || expense.category === selectedCategory;
  });

  // Function to check if the expense is overdue
  const isOverdue = (dueDate) => {
    const currentDate = new Date();
    const expenseDate = new Date(dueDate);
    return expenseDate < currentDate;
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      
      {/* Dropdown menu for category filter */}
      <label htmlFor="category">Filter by category: </label>
      <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="personal">Personal</option>
        <option value="business">Business</option>
        <option value="misc">Misc</option>
      </select>

      {/* Display the filtered expenses */}
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - ${expense.amount} - Due: {expense.dueDate}{" "}
            {isOverdue(expense.dueDate) && <strong>(Overdue)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LightBulb;
