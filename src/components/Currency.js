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
    let currencyWord = '';

    switch(currency) {
        case '$':
          currencyWord = '$ Dollar';
          break;
        case '£':
            currencyWord = '£ Pound';
          break;
        case '€':
            currencyWord = '€ Euro';
          break;
        case '₹':
            currencyWord = '₹ Ruppee';
          break;
        default:
            currencyWord = '£ Pound';
      }

    const handleCurrencyChange = (event) => {
        setCurrencyType(event)
        console.log('handleCurrencyChange', event, currency)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event,
        });
    }
    return (
        <>
            <style>{customStyles}</style>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="lg" className="light-green-btn">
                    Currency({currencyWord})
                </Dropdown.Toggle>

                <Dropdown.Menu className="light-green-btn">
                    <Dropdown.Item onClick={() => handleCurrencyChange('$')}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCurrencyChange('£')}>£ Pound</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCurrencyChange('€')}>€ Euro</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCurrencyChange('₹')}>₹ Ruppee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default Currency;

