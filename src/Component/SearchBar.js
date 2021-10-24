import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Divider, InputBase, Paper, TextField } from "@material-ui/core";
import { Directions } from "@material-ui/icons";

// render
const SearchBar = () => {
  return (
    <div style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
      
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Nosh-Culinary  Map"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton>
          <SearchIcon style={{color:'blue'}}/>
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton
          color="primary"
          sx={{ p: "5px" }}
          aria-label="directions"
        ></IconButton>
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <Directions />
      </IconButton>
    
    </div>
  );
};
export default SearchBar;
