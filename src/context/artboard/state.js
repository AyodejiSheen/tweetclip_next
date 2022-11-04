
import { CHANGE_COLOR, GET_FONTS } from "./actions";
import ArtBoardContext from "./context";




const { useReducer } = require("react");
const { default: ArtboardReducers } = require("./reducer")





const ArtboardState = (props) => {


    const initialState = {
        color: 'rgba(65, 89, 56, 1)',
        font: ""
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(ArtboardReducers, initialState);



    //Global functions go down here (with Auth API calls)
    const changeColor = (value) => {
        dispatch({
            type: CHANGE_COLOR,
            payload: value
        })
    }


    const getFonts = async (value) => {

        dispatch({
            type: GET_FONTS,
            payload: value
        })
        console.log(value)
    }












    return (
        <ArtBoardContext.Provider value={{
            color: state.color,
            font: state.font,
            changeColor,
            getFonts
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </ArtBoardContext.Provider>
    )


}


export default ArtboardState;