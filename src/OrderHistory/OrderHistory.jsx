import React from "react";
import SearchBar from './SearchBar.jsx';
import OrderCard from './OrderCard.jsx';
import { getAllOrders } from './data.js';

class OrderHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    // get user's order
    this.setState({ orders: getAllOrders() });
  }

  render() {
    let orderDisplay;
    if (this.state.orders.length === 0) {
      orderDisplay = <p>Sorry, we found nothing</p>
    } else {
      orderDisplay = this.state.orders.map((order, index) => { return <OrderCard key={index} order={order} /> });
    }

    return (
      <div>
        <SearchBar />
        <div>
          {orderDisplay}
        </div>

      </div>

    );
  }

}

export default OrderHistory;