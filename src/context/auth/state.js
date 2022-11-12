import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import UiContext from "../UI/context";



import { SIGN_UP } from "./actions";
import { RESET_PASSWORD } from "./actions";
import setAuthToken from "./setAuthToken";


const { useReducer, useContext } = require("react");
const { default: AuthContext } = require("./context");
const { default: AuthReducers } = require("./reducer")





const AuthState = (props) => {


    const initialState = {
        user: null,
        isAuthenticated: null,
        token: sessionStorage.getItem('ctoken'),
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
                navigate('dashboard')
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
                if (data.device) {
                    navigate(`new-device/${value.email}/${data.device}`)
                }
            });
    }


    const verifyEmail = async (code) => {
        const value = { code: code, email: state.user.email };
        await axios.post(`${baseUrl}/confirmation`, value, config)
            .then((response) => {
                const { data } = response
                setAlert({ msg: data.message, type: "success" })
                navigate('dashboard')
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            });
    }


    const ResetPassword = async ({ email }) => {
        await axios.get(`${baseUrl}/password_reset/${email}`, config)
            .then((response) => {
                const { data } = response
                setAlert({ msg: data.message, type: "success" })
                dispatch({
                    type: RESET_PASSWORD,
                    payload: email
                })
                navigate('reset-password')
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            })
    }


    const updatePassword = async (data) => {
        let details = { code: data.code, password: data.password }
        await axios.put(`${baseUrl}/password_reset/${state.user.email}`, details, config)
            .then((response) => {
                const { data } = response
                setAlert({ msg: data.message, type: "success" })
                navigate('dashboard')
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            })
    }


    const newBrowserConfig = async (data) => {
        let details = { email: data.email, code: data.code }
        await axios.put(`${baseUrl}/browser_confirmation/${data.id}`, details, config)
            .then((response) => {
                const { data } = response
                setAlert({ msg: data.message, type: "success" })
                navigate('dashboard')
                return true;
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            })
    }


    const loadUsersDetails = async () => {

        if (sessionStorage.ctoken) {
            setAuthToken(sessionStorage.ctoken)
        }

        await axios.get(`${baseUrl}/auth/me`)
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })

    }









    return (
        <AuthContext.Provider value={{
            userSignup,
            userLogin,
            verifyEmail,
            ResetPassword,
            updatePassword,
            newBrowserConfig,
            loadUsersDetails,
            isAuthenticated: state.isAuthenticated,
            user: state.user
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </AuthContext.Provider>
    )


}


export default AuthState;