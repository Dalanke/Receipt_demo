import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function OrderCard(props) {
  const order = props.order;

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
        <img key={index} src={item.img} alt="" />
      );
    });
  } else {
    itemDisplay = order.items.slice(0,3).map((item, index) => {
      return (
        <img key={index} src={item.img} alt="" />
      );
    });
  }


  return (
    <Card variant="outlined">
      <CardHeader
        title={order.date.toDateString().slice(4)}
        subheader={`${order.items.length} items: ${subtotal.toFixed(2)}`}
        action={
          <Button>detail</Button>
        }
      />

      <CardContent>
        <div style={{ display: "inline" }}>
          {itemDisplay}
        </div>
      </CardContent>
    </Card>
  );
}