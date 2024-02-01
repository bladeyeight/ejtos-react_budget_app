import React, { useContext, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const customStyles = `
  .light-green-btn, .light-green-btn:hover, .light-green-btn:focus, .light-green-btn:active {
    background-color: lightgreen;
    border-color: lightgreen;
  }
`;

const Currency = (props) => {

    const { dispatch, currency  } = useContext(AppContext);
    const [newCurrencyType, setCurrencyType] = useState(currency);

    const handleCurrencyChange = (event) => {
        setCurrencyType(event.target.value)
        console.log('handleCurrencyChange', event, event.target.value, currency)
        dispatch({
            type: 'SET_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <>
            <style>{customStyles}</style>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg" className="light-green-btn">
                    Currency({currency})
                </Dropdown.Toggle>

                <Dropdown.Menu className="light-green-btn">
                    <Dropdown.Item value="$" onClick={handleCurrencyChange}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item value="£" onClick={handleCurrencyChange}>£ Pound</Dropdown.Item>
                    <Dropdown.Item value="€" onClick={handleCurrencyChange}>€ Euro</Dropdown.Item>
                    <Dropdown.Item value="₹" onClick={handleCurrencyChange}>₹ Ruppee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default Currency;

