
import { CHANGE_COLOR } from "./actions";
import ArtBoardContext from "./context";




const { useReducer } = require("react");
const { default: ArtboardReducers } = require("./reducer")





const ArtboardState = (props) => {


    const initialState = {
        color:'rgba(65, 89, 56, 1)',
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(ArtboardReducers, initialState);



    //Global functions go down here (with Auth API calls)
    const changeColor = (value) => {
        dispatch({
            type:CHANGE_COLOR,
            payload:value
        })
    }














    return (
        <ArtBoardContext.Provider value={{
                color:state.color,
                changeColor,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </ArtBoardContext.Provider>
    )


}


export default ArtboardState;