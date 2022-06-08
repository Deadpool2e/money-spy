import React from 'react';
import deleteimg from './Images/delete.png';
const TransactionTable = ({ transactionList, deleteTransaction }) => {
  return (
    <>
      <div className='table-header'>
        <table className='table'>
            <tr >
              <th className='col col-1'>Amount</th>
              <th className='col col-2'>Description</th>
              <th className='col col-3'>Date</th>
              <th className='col col-4'>Type</th>
              <th className='col col-5'>Remove</th>
            </tr>
        </table>
      </div>
      <div className='table-cnt'>
        <table className='table table-borderless'>
          <tbody>
            {transactionList.length > 0 ? (
              transactionList.map((transaction, index) => {
                return (
                  <tr className="table-ctn-rows" >
                    <td className='col col-1'>₹{transaction.amount}</td>
                    <td className='col col-2'>{transaction.description}</td>
                    <td className='col col-3'>{transaction.date}</td>
                    <td className='col col-4'>{transaction.type}</td>
                    <td className='col col-5' ><img src={deleteimg} index={index} key={index} className='deleteimg' onClick={() => {
                      deleteTransaction(index)
                    }}
                    /></td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="Error-msg">No transactions Exists.. Click on add button to add a transaction</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default TransactionTable;