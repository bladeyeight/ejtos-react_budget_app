import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);


    const handleBudgetChange = (event) => {
        console.log(event, event.target.value, budget)
        setNewBudget(event.target.value);

        if (event.target.value > 20000) {
            alert("The value budget cannot be over 20,000");
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
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
