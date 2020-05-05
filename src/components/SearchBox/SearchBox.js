import React from "react";
import TextField from "@material-ui/core/TextField";

export const SearchBox = (props) => (
  <TextField
    label="Outlined"
    variant="outlined"
    fullWidth
    onChange={props.onChangeHanlde}
  />
);
