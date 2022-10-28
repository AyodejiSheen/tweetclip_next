import axios from "axios";
import { baseurl } from "../../baseUrl";
import UiContext from "../UI/context";

const { useReducer, useContext } = require("react");
const { default: AuthContext } = require("./context");
const { default: AuthReducers } = require("./reducer");

const AuthState = (props) => {
  const initialState = {
    user: null,
  };

  //to call authreducer with dispatch
  const [
    state,
    // dispatch
  ] = useReducer(AuthReducers, initialState);

  //alert context
  let { setAlert } = useContext(UiContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //Global functions go down here (with Auth API calls)

  const userSignup = async (data) => {
    await axios
      .post(`${baseurl}/signup`, data, config)
      .then((response) => {
        const { data } = response;
        setAlert({ msg: data.message, type: "success" });
        return true;
      })
      .catch((err) => {
        const { data } = err.response;
        setAlert({ msg: data.message, type: "fail" });
      });
  };

  return (
    <AuthContext.Provider
      value={{
        userSignup,
        user: state.user,
      }}
    >
      {/* to make the fuctions and state availabe globally */}
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
