import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    textAlign: "left",
    fontSize: "18px",
    fontWeight: "bold"
  },
});


export default function OrderDetail() {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  //the OrderHistory component will pass the order detail with state
  const info = location.state;

  // subtotal calculation
  let subtotal = 0;
  info.items.forEach((item) => {
    subtotal += item.price * item.number;
  });


  //goback button
  const backButtonClick = () => {
    history.goBack();
  }

  // print button
  const printButtonClick = () => {
    // push info(order detail to print component)
    if (info) {
      const path = {
        pathname: '/print',
        state: info
      }
      history.push(path);
    }
  }

  // construct item list, for each item, display img, name, price
  const itemDetail = info.items.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <ListItem >
          <ListItemAvatar>
            <img src={item.img} alt="" style={{ width: "70px", height: "70px", paddingRight: "5px" }} />
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={`$${item.price} x ${item.number}`} />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  })


  return (
    <div>
      <div style={{ display: "flex", position: "fixed", width: "100%", top: 0, left: 0, alignItems: "center", backgroundColor: "orange" }}>
        <div>
          <IconButton onClick={backButtonClick}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <div style={{ margin: "auto", fontWeight: "bold" }}>Order Detail</div>
        <div>
          <IconButton onClick={printButtonClick}>
            <ReceiptIcon />
          </IconButton>
        </div>
      </div>
      <div style={{ marginTop: "70px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold", padding: "5px 10px", textAlign: "left" }}>{`Purchase on ${info.date.toDateString().slice(4)}`}</div>
      </div>
      <List>
        {itemDetail}
      </List>
      <div>
        <Card variant="outlined" style={{ minWidth: '300px', margin: '10px' }}>
          <CardHeader
            title="Order Summary"
            classes={{ title: classes.title }}
            style={{ backgroundColor: "#dedede", padding: "10px" }}
          />
          <CardContent>
            <div style={{fontSize:"14px"}}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Subtotal</div>
                <div>{`$${subtotal.toFixed(2)}`}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{'Tax 9.5%'}</div>
                <div>{`$${(subtotal * 0.095).toFixed(2)}`}</div>
              </div>
              <Divider style={{margin:"5px 0"}}/>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Total</div>
                <div>{`$${(subtotal * 1.095).toFixed(2)}`}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}