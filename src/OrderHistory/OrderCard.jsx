import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function OrderCard(props) {
  const order = props.order;
  const history = useHistory();

  // calculate subtotal
  let subtotal = 0;
  order.items.forEach((item) => {
    subtotal += item.price * item.number;
  });

  // display item image (max 3 items)
  let itemDisplay;
  if (order.items.length <= 3) {
    itemDisplay = order.items.map((item, index) => {
      return (
        <img style={{width:'50px', height:'50px'}} key={index} src={item.img} alt="" />
      );
    });
  } else {
    itemDisplay = order.items.slice(0,3).map((item, index) => {
      return (
        <img style={{width:'50px', height:'50px'}} key={index} src={item.img} alt="" />
      );
    });
  }

  const detailButtonClick = () => {
    const path = {
      pathname: '/detail',
      state: order
    }
    history.push(path);
  }

  return (
    <Card variant="outlined" style={{minWidth:'300px', margin:'10px'}}>
      <CardHeader
        title={order.date.toDateString().slice(4)}
        subheader={`${order.items.length} items: ${subtotal.toFixed(2)}`}
        action={
          <Button onClick={detailButtonClick}>detail</Button>
        }
      />

      <CardContent>
        <div style={{ display: "inline" , float: "left"}}>
          {itemDisplay}
        </div>
      </CardContent>
    </Card>
  );
}