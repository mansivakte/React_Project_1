import axios from "axios";
import { useState, useEffect } from "react";
import UsersTable from "./UsersTable";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://shivneriwholesalers.com/stock/web/myapi/user")
      .then((parameters) => {
        setUser(parameters.data);
        console.log("parameters", parameters.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  console.log("user user", user);

  return (
    <>
      <UsersTable data={user} />
    </>
  );
};
export default Users;
