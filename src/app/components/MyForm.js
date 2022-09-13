import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function MyForm() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
      />
      <TextField
        helperText="Please enter your contact no"
        id="demo-helper-text-misaligned"
        label="Contact No"
      />
      <TextField
        helperText="Please enter your email id"
        id="demo-helper-text-misaligned"
        label="Email"
      />
      <Button type="submit" variant="contained">
        Details
      </Button>
    </Box>
  );
}
