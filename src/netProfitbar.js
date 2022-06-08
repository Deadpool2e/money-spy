import React from 'react';
import increaseImg from './Images/increase.png';
import decreaseImg from './Images/decrease.png';
import balanceImg from './Images/balance.png';
const NetProfitbar = ({ netProfit }) => {
    const incImg = React.useRef();
    const decImg = React.useRef();
    const balImg = React.useRef();
    const netSpend = React.useRef();
    React.useEffect(() => {
        if (netProfit === 0) {
            incImg.current.style.display = "none";
            decImg.current.style.display = "none";
            balImg.current.style.display = "block";
            netSpend.current.innerText = "";
        }
        if (netProfit > 0) {
            incImg.current.style.display = "block";
            decImg.current.style.display = "none";
            balImg.current.style.display = "none";
            netSpend.current.innerText = "-Profit";
        }
        else if (netProfit < 0) {
            decImg.current.style.display = "block";
            incImg.current.style.display = "none";
            balImg.current.style.display = "none";
            netSpend.current.innerText = "-Loss";
        }
    }, [netProfit])

    return (
        <div className="net_profit">
            <label htmlFor="Net-Spend" className="label">Net-Spend : </label>
            &nbsp; ₹{Math.abs(netProfit)}
            <span className="Net_Spend" ref={netSpend} ></span>
            <img src={increaseImg} ref={incImg} className="spendImgs display-none" />
            <img src={decreaseImg} ref={decImg} className="spendImgs display-none" />
            <img src={balanceImg} ref={balImg} className="spendImgs display-none" />
        </div>
    )
}
export default NetProfitbar;