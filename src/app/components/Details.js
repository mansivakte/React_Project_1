import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
// import { Location, Params } from "react-router-dom";

function Details() {
  const [info, setInfo] = useState({});
  const [userHistory, setUserHistory] = useState([]);
  const [comment, setComment] = useState();

  //   const { pathname } = location;

  //   console.log("props", pathname);

  const getUserData = async () => {
    const result = await axios.get(
      "http://shivneriwholesalers.com/stock/web/myapi/user1"
    );
    setInfo(result.data);
  };

  const postUserData = () => {
    axios.post("http://shivneriwholesalers.com/stock/web/myapi/posthistory", {
      comment: comment,
    });
    const newData = [...userHistory];
    newData.push({
      user_id: "1",
      date_time: "13/09/2022 12:30:40",
      comment: comment,
    });
    setUserHistory(newData);
    // getUserHistory();
  };

  const getUserHistory = async () => {
    const result = await axios.get(
      "http://shivneriwholesalers.com/stock/web/myapi/history"
    );
    setUserHistory(result.data);
  };
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    getUserData();
    getUserHistory();
    console.log("useEffect 1");
  }, []);

  useEffect(() => {
    console.log("useEffect 2");
    return () => {
      setUserHistory([]);
    }; // unmount
  }, [rerender, info]);
  // code

  return (
    <>
      <h2>Welcome to Details page</h2>
      <h3>Username: {info.name}</h3>
      <h3>Contact: {info.contact_no}</h3>
      <h3>Email: {info.email}</h3>
      <button
        onClick={() => {
          setRerender(!rerender);
        }}
      >
        opration
      </button>
      <hr />
      {userHistory.map((record) => {
        return (
          <div style={{ display: "flex" }}>
            <p>Date :{record.date_time} </p>&nbsp;&nbsp;&nbsp;
            <p> Comment :{record.comment} </p>
          </div>
        );
      })}

      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Users Details"
          id="fullWidth"
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />

        <Button type="submit" variant="contained" onClick={postUserData}>
          Save
        </Button>
      </Box>
    </>
  );
}
export default Details;
