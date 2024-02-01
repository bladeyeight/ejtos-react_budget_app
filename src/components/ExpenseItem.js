import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";





const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><BsPlus style={{ color: 'white', backgroundColor: "green", borderRadius: "55%", width: '20', height: '20' }} onClick={event=> increaseAllocation(props.name)}>+</BsPlus></td>
        <td><FiMinus style={{borderRadius: "60%", backgroundColor: '#CC0202', color: 'white', width: '20', height: '20'}} onClick={event=> decreaseAllocation(props.name)}>+</FiMinus></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
