import AboutUs from "./components/AboutUs";
import Users from "./components/Users";
import AppHeader from "./components/AppHeader";
import MyForm from "./components/MyForm";

function Home() {
  return (
    <>
      <AppHeader />
      <h1>Welcome to Home Page</h1>
      <MyForm />
      {/* <AboutUs />
      <Users /> */}
    </>
  );
}
export default Home;
