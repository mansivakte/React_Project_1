import { formControlClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useSelector } from "react-redux";
function Login() {
  const newValue = useSelector((state) => state);
  useEffect(() => {
    const loginStatus = localStorage.getItem("isUserLogin");
    if (loginStatus) {
      window.location = "/home";
    }
  }, []);

  let navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);
  const userNameChangeHadler = (event) => {
    setUserName(event.target.value);
  };
  const passwordChangeHadler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = () => {
    // api
    if (userName == "demo" && password == "demo") {
      localStorage.setItem("isUserLogin", 1);
      return navigate("/home");
    } else {
      setShowLoginError(true);
    }
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Login</h2>
          {newValue.count}
          {showLoginError ? <p>Invalid Username or password</p> : null}
        </Grid>
        <form onSubmit={loginHandler}>
          <TextField
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            fullWidth
            required
            value={userName}
            onChange={userNameChangeHadler}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={passwordChangeHadler}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Login
          </Button>
        </form>
        <Typography>
          <Link href="">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
