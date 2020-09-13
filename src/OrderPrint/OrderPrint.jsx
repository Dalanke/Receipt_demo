import React, { useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Logo from './Travtail.png';



export default function OrderDetail() {
  const location = useLocation();
  const history = useHistory();
  //the OrderHistory component will pass the order detail with state
  const info = location.state;

  const backButtonClick = () => {
    history.goBack();
  }

  // subtotal calculation
  let subtotal = 0;
  info.items.forEach((item) => {
    subtotal += item.price * item.number;
  });

  // for each item, display img, name, price
  const itemDetail = info.items.map((item, index) => {
    return (
      <div key={index} style={{ minWidth: "300px", fontSize: "16px", padding: "10px 0", display: "flex", justifyContent: "space-between" }}>
        <div style={{ maxWidth: "200px", textAlign: "left", fontSize: "14px" }}>{`${item.name}(${item.number})`}</div>
        <div>{`$${(item.price * item.number).toFixed(2)}`} </div>
      </div>
    );
  })

  const printpart = useRef(null);

  const onPrintClick = () => {
    const old = window.document.body.innerHTML
    window.document.body.innerHTML = ''
    window.document.body.appendChild(printpart.current)
    window.print() 
    window.document.body.innerHTML = old
    window.location.reload() 
  }

  return (
    <div>
      <div style={{ display: "flex", position: "fixed", width: "100%", top: 0, left: 0, alignItems: "center", backgroundColor: "orange", zIndex: 10 }}>
        <div>
          <IconButton onClick={backButtonClick}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <div style={{ margin: "auto", fontWeight: "bold" }}>Receipt Print</div>
        <div style={{ width: "48px", height: "48px" }}></div>
      </div>
      <div className="printable" ref={printpart}>
        <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <img style={{ width: "80px", height: "80px" }} src={Logo} alt="" />
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "10px" }}>{`Total:$${(subtotal * 1.095).toFixed(2)}`}</div>
            <div style={{ fontSize: "8px" }}>{info.date.toDateString()}</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "22px", fontWeight: "bold", textAlign: "left" }}>Thanks for Your Order</div>
          <div style={{ fontSize: "14px", textAlign: "left" }}>We'are looking forward to your next visit </div>
        </div>
        <div style={{ fontSize: "26px", fontWeight: "bold", padding: "15px 0", display: "flex", justifyContent: "space-between" }}>
          <div>Total</div>
          <div>{`$${(subtotal * 1.095).toFixed(2)}`} </div>
        </div>
        <Divider />
        <div>
          {itemDetail}
        </div>
        <Divider />
        <div style={{ fontSize: "16px", fontWeight: "bold", padding: "15px 0", display: "flex", justifyContent: "space-between" }}>
          <div>Subtotal</div>
          <div>{`$${subtotal.toFixed(2)}`} </div>
        </div>
        <div style={{ fontSize: "16px", fontWeight: "bold", padding: "5px 0 15px 0", display: "flex", justifyContent: "space-between" }}>
          <div>Tax(9.5%)</div>
          <div>{`$${(subtotal * 0.095).toFixed(2)}`} </div>
        </div>
        <Divider />
        <div style={{ fontSize: "26px", fontWeight: "bold", padding: "15px 0", textAlign: "left" }}>
          <div>Payment</div>
        </div>
        <div style={{ fontSize: "16px", fontWeight: "bold", padding: "5px 0", display: "flex", justifyContent: "space-between" }}>
          <div>{info.payment.type}</div>
          <div>{info.payment.amount === "n/a" ? `$${(subtotal * 1.095).toFixed(2)}` : info.payment.amount} </div>
        </div>
      </div>
      <div style={{padding:"20px 0"}}>
        <button onClick={onPrintClick}>Print</button>
      </div>
      
    </div>
  );
}