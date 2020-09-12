import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function SearchBar() {
  return (
    <div style={{position: "fixed", top:"10px"}}>
      <div className="title">Your Order History</div>
      <TextField
        id="outlined-search"
        type="search"
        variant="outlined"
        placeholder="Search your history"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}