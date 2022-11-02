
import { SET_ALERT, REMOVE_ALERT, SWITCH_THEME } from "./actions";



const { useReducer } = require("react");
const { default: UiContext } = require("./context");
const { default: UiReducers } = require("./reducer")




const UiState = (props) => {


    const initialState = {
        isDark: true,
        alert: { showAlert: false, msg: null, type: null }
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(UiReducers, initialState);



    //Global functions go down here (with Auth API calls)
    const setAlert = (data) => {

        dispatch({
            type: SET_ALERT,
            payload: data
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
        }), 7000)

    }


    const switchTheme = () => {
        dispatch({
            type: SWITCH_THEME
        })
        console.log(state.isDark)
    }














    return (
        <UiContext.Provider value={{
            setAlert,
            switchTheme,
            alert: state.alert,
            isDark:state.isDark
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </UiContext.Provider>
    )


}


export default UiState;