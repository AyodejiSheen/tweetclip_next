import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import UiContext from "../UI/context";
import { SIGN_UP } from "./actions";

const { useReducer, useContext } = require("react");
const { default: AuthContext } = require("./context");
const { default: AuthReducers } = require("./reducer")





const AuthState = (props) => {


    const initialState = {
        user: null,
    }


    //to call authreducer with dispatch
    const [state, dispatch] = useReducer(AuthReducers, initialState);


    //alert context
    let { setAlert } = useContext(UiContext)

    const navigate = useNavigate()


    //api config
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };








    //Global functions go down here (with Auth API calls)

    const userSignup = async (value) => {
        await axios.post(`${baseUrl}/signup`, value, config)
            .then((response) => {
                const { data } = response
                setAlert({ msg: data.message, type: "success" })
                dispatch({
                    type: SIGN_UP,
                    payload: value
                })
                navigate('verification')
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            });
    }


    const userLogin = async (value) => {
        await axios.post(`${baseUrl}/auth`, value, config)
            .then((response) => {
                const { data } = response
                setAlert({ msg: data.message, type: "success" })
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            });
    }


    const verifyEmail = async (code) => {
        const value = { code: code, email: state.user.email };
        await axios.post(`${baseUrl}/confirmation`, value, config)
            .then((response) => {
                const { data } = response
                setAlert({ msg: data.message, type: "success" })
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            });
    }












    return (
        <AuthContext.Provider value={{
            userSignup,
            userLogin,
            verifyEmail,
            user: state.user
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </AuthContext.Provider>
    )


}


export default AuthState;