import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function SearchBar() {
  return (
    <div style={{position:"fixed", width:"100%", top: 0, left:0, backgroundColor:"orange", zIndex:10}}>
      <div style={{color:"white", fontWeight:"bold", paddingTop:"10px" }}>Your Order History</div>
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
        size="small"
        style={{backgroundColor:"white", margin:"10px", borderRadius:"6px", width: "300px"}}
      />
    </div>
  );
}