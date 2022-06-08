import React from 'react';
import NetProfitbar from './netProfitbar';
import TitleBar from './TitleBar';
import InputBox from './InputBox';
import TransactionTable from './TransactionTable';
import './App.css';

function App() {
  const inputRef = React.useRef();
  const transactions = [];
  const [transactionList, settransactionList] = React.useState(transactions);
  const [netProfit, setnetProfit] = React.useState(0);

  const addTransaction = (amount, description, date, selectedOption) => {
    let newtransactionList = [...transactionList];
    newtransactionList.push({
      amount: amount,
      description: description,
      date: date,
      type: selectedOption
    });
    let newnetProfit = netProfit;
    if (selectedOption == "Expenditure") {
      newnetProfit -= amount;
    }
    else if (selectedOption == "Income") {
      newnetProfit += Number(amount);
    }
    setnetProfit(newnetProfit);
    settransactionList(newtransactionList);
  };

  const deleteTransaction=(index)=>{
   let newtransactionList = [...transactionList];
   newtransactionList.splice(index, 1);
   let newnetProfit = netProfit;
   if (transactionList[index].type == "Expenditure") {
     newnetProfit += Number(transactionList[index].amount);
   }
   else if (transactionList[index].type == "Income") {
     newnetProfit -= Number(transactionList[index].amount);
   }
   setnetProfit(newnetProfit);
   settransactionList(newtransactionList); 
  }

  const handleButton = () => {
    inputRef.current.style.display = "block";
  }
  window.onclick = function (event) {
    if (event.target == inputRef.current) {
      inputRef.current.style.display = "none";
    }
  };

  
  

  return (
    <>
      <TitleBar />
      <InputBox inputRef={inputRef} addTransaction={addTransaction} />

      <NetProfitbar netProfit={netProfit}/>
      <button type="button" className="btn btn-primary add-btn" onClick={handleButton}>Add Transactions</button>

        <div className="Transactions">Transactions</div>
        <TransactionTable transactionList={transactionList} deleteTransaction={deleteTransaction} />

    </>
  )
}

export default App;
