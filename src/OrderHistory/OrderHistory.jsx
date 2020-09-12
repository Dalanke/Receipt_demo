import React from "react";

class OrderHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  render() {
    let orderDisplay;
    if (this.state.orders.length === 0) {
      orderDisplay = <p>Sorry, we found nothing</p>
    }

    return orderDisplay;
  }

}

export default OrderHistory;