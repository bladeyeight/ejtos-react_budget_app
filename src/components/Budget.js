import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const handleBudgetChange = (event) => {
        console.log(event, event.target.value, budget)
        setNewBudget(event.target.value);

        if (event.target.value > 20000) {
            alert("The value budget cannot be over 20,000");
            setNewBudget(budget);
            return;
        }

        if (event.target.value < totalExpenses) {
            alert("The value budget cannot be less than current spending");
            setNewBudget(budget);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        console.log(event.target.value, budget)
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
