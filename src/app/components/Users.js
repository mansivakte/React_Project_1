import axios from "axios";
import { useState, useEffect, memo } from "react";
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

  const [cmp, updatecmp] = useState(false);
  return (
    <>
      <h2>Users Page</h2>
      <button onClick={() => updatecmp(!cmp)}>Update</button>
      <UsersTable data={user} cmp={cmp} />
    </>
  );
};
export default Users;
