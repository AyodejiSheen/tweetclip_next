
import { SET_ALERT, REMOVE_ALERT, SWITCH_THEME, SHOW_ITEM, REMOVE_ITEM, } from "./actions";



const { useReducer } = require("react");
const { default: UiContext } = require("./context");
const { default: UiReducers } = require("./reducer")




const UiState = (props) => {


    const initialState = {
        isDark: 'light',
        alert: { showAlert: false, msg: null, type: null },
        show: "",
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


    const switchTheme = (value) => {
        dispatch({
            type: SWITCH_THEME,
            payload: value
        })
    }


    const showItem = (value) => {
        if (state.show === value) {
            dispatch({
                type:REMOVE_ITEM,
            })
        } else {
            dispatch({
                type: SHOW_ITEM,
                payload: value
            })
        }
    
    }















    return (
        <UiContext.Provider value={{
            setAlert,
            switchTheme,
            showItem,
            show: state.show,
            alert: state.alert,
            isDark: state.isDark
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </UiContext.Provider>
    )


}


export default UiState;