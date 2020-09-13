import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SearchBar from './SearchBar.jsx';
import OrderCard from './OrderCard.jsx';
import { getAllOrders } from './data.js';

class OrderHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      dateFilter: 'Last 30 days',
      modalOpen: false,
    }
  }

  componentDidMount() {
    // get user's order
    this.setState({ orders: getAllOrders() });
  }

  onDateSelect = (event) => {
    this.setState({ dateFilter: event.target.value });
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
        <div style={{ display: "inline" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              Filter
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <FormControl variant="outlined" >
                  <InputLabel id="demo-simple-select-outlined-label">Date</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.dateFilter}
                    onChange={this.onDateSelect}
                    label="Date"
                  >
                    <MenuItem value="Last week">Last week</MenuItem>
                    <MenuItem value="Last 30 days">Last 30 days</MenuItem>
                    <MenuItem value="Past 3 months">Past 3 months</MenuItem>
                    <MenuItem value={new Date().getFullYear()}>{new Date().getFullYear()}</MenuItem>
                    <MenuItem value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}</MenuItem>
                    <MenuItem value="All">All</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider />

        <div style={{ paddingTop: "30px" }}>
          {orderDisplay}
        </div>
      </div>
    );
  }

}

export default OrderHistory;