import axios from "axios";
import baseUrl from "../../baseUrl";

const { useReducer } = require("react");
const { default: AuthContext } = require("./context");
const { default: AuthReducers } = require("./reducer")





const AuthState = (props) => {


    const initialState = {
        user: null,
    }


    //to call authreducer with dispatch
    const [state, dispatch] = useReducer(AuthReducers, initialState);






    //Global functions go down here (with Auth API calls)

    const userSignup = async (data) => {
        // await axios.post(`${baseUrl.baseUrl}/user`, data).then((response) => {
        //     if (response.data.error) {
        console.log(data)
        return true;
        //     } else {

        //         return true
        //     }
        // }).catch((err) => {

        // });
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