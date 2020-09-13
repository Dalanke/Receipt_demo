import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "bold"
  },
  subheader: {
    textAlign: "left",
    fontSize: "12px"
  },
});

export default function OrderCard(props) {
  const order = props.order;
  const history = useHistory();
  const classes = useStyles();

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
        <img style={{ width: '50px', height: '50px' }} key={index} src={item.img} alt="" />
      );
    });
  } else {
    itemDisplay = order.items.slice(0, 3).map((item, index) => {
      return (
        <img style={{ width: '50px', height: '50px' }} key={index} src={item.img} alt="" />
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
    <Card variant="outlined" style={{ minWidth: '300px', margin: '10px' }}>
      <CardHeader
        title={order.date.toDateString().slice(4)}
        subheader={`${order.items.length} items: $${(subtotal * 1.095).toFixed(2)}`}
        action={
          <IconButton onClick={detailButtonClick}>
            <MoreHorizIcon />
          </IconButton>
        }
        style={{ backgroundColor: "#dedede", padding: "10px" }}
        classes={{ title: classes.title, subheader: classes.subheader }}
      />

      <CardContent>
        <div style={{ display: "flex", float: "left", alignItems: "center", padding: "6px" }}>
          {itemDisplay}
          <div style={{ display: "inline", fontSize: "8px", padding: "10px" }}>{order.items.length > 3 ? `+ ${order.items.length - 3} items` : null}</div>
        </div>
      </CardContent>
    </Card>
  );
}