import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReceiptIcon from '@material-ui/icons/Receipt';


export default function OrderDetail() {
  const location = useLocation();
  const history = useHistory();
  //the OrderHistory component will pass the order detail with state
  const info = location.state;

  const backButtonClick = () => {
    history.goBack();
  }
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
  // for each item, display img, name, price
  const itemDetail = info.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <ListItemAvatar>
          <img src={item.img} alt="" />
        </ListItemAvatar>
        <ListItemText primary={item.name} secondary={`${item.price} x ${item.number}`} />
      </ListItem>
    );
  })


  return (
    <div>
      <div style={{display:"inline-flex"}}>
        <div>
          <IconButton onClick={backButtonClick}>
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={printButtonClick}>
            <ReceiptIcon />
          </IconButton>
        </div>
      </div>
      <List>
        {itemDetail}
      </List>
    </div>
  );
}