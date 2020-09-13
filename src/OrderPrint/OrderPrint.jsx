import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



export default function OrderDetail() {
  const location = useLocation();
  const history = useHistory();
  //the OrderHistory component will pass the order detail with state
  const info = location.state;

  const backButtonClick = () => {
    history.goBack();
  }

  // for each item, display img, name, price
  const itemDetail = info.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <ListItemText primary={item.name} />
        <ListItemText primary={item.number} />
        <ListItemText primary={`$${item.number}`} />
      </ListItem>
    );
  })


  return (
    <div>
      <div style={{ display: "inline-flex" }}>
        <div>
          <IconButton onClick={backButtonClick}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
      </div>
      <List>
        <ListItem key={-1}>
          <ListItemText primary="Item" />
          <ListItemText primary="Quantity" />
          <ListItemText primary="Unit Price" />
        </ListItem>
        {itemDetail}
      </List>
    </div>
  );
}