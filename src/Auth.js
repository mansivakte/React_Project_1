import { Route } from "react-router-dom";

const Auth = (props) => {
  return <Route path={props.path} element={props.element}></Route>;
};

export default Auth;
