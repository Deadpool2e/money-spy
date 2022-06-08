import React from 'react';
import Select from 'react-select';

const InputBox = ({ inputRef, addTransaction }) => {
    const [amount, setamount] = React.useState(0);
    const [description, setdescription] = React.useState('');
    const [date, setdate] = React.useState('');
    const data = [
        {
            value: 1,
            label: "Income"
        },
        {
            value: 2,
            label: "Expenditure"
        }
    ]
    const [selectedOption, setselectedOption] = React.useState('');

    const handleAddbtn = () => {
        if (selectedOption === '') {
            alert("Please select type:")
        }
        else {
            inputRef.current.style.display = "none";
            addTransaction(amount, description, date, selectedOption.label);
        }
    }

    return (
        <div className="input-container" ref={inputRef}>
            <div className="input-box">
                <label htmlFor="amount" className="label">Amount:</label>

                <input type="number" name="amount" onChange={(e) => {
                    setamount(e.currentTarget.value);
                }}
                    value={amount}
                    className="amount"

                />
                <br />

                <Select
                    placeholder="Type"
                    value={selectedOption}
                    options={data}
                    onChange={(e) => {
                        setselectedOption(e);
                    }
                    }
                    className="type"
                />
                <label htmlFor="Date" className="label">Date of transaction :</label>
                <input type="date" name="Date" onChange={(e) => {
                    setdate(e.currentTarget.value);
                }}
                    className="date"
                />
                <br />
                <label htmlFor="Description" className="label">Description:</label>

                <input type="text" name="Description" onChange={(e) => {
                    setdescription(e.currentTarget.value);
                }}
                    value={description}
                    placeholder="Description"
                    className="description"
                />
                <br />
                <button type="button" className="btn btn-primary" onClick={handleAddbtn}>Add</button>
            </div>
        </div>
    );
}

export default InputBox;