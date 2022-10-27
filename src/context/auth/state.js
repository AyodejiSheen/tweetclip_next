import axios from "axios";
import baseUrl from "../../baseUrl";
import UiContext from "../UI/context";

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



    //Global functions go down here (with Auth API calls)

    const userSignup = async (data) => {
        await axios.post(`${baseUrl.baseUrl}/signup`, data)
            .then((response) => {
                console.log(response)
                return true;
            }).catch((err) => {
                console.log(err.message);
                setAlert({ msg: err.message, type: "fail" })
            });
    }














    return (
        <AuthContext.Provider value={{
            userSignup,
            user: state.user
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </AuthContext.Provider>
    )


}


export default AuthState;