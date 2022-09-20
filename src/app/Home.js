import Users from "./components/Users";
import AppHeader from "./components/AppHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const value = useSelector((store) => store);

  console.log("value", value);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isUserLogin");
    if (!loginStatus) {
      window.location = "/";
    }
  });

  const incrementCount = () => {
    dispatch({ type: "demo", name: "hello" });
  };

  return (
    <>
      <button onClick={incrementCount}>Increment count bh 1</button>
      <AppHeader />
      {/* <MyForm /> */}
      {/* <AboutUs /> */}
      <Users />
    </>
  );
}
export default Home;
