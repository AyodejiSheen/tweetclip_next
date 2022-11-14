
import { useReducer } from "react";
import { CHANGE_COLOR, GET_FONTS, FONT_SIZE } from "./actions";
import ArtBoardContext from "./context";
import ArtboardReducers from "./reducer";








const ArtboardState = (props) => {


    const initialState = {
        color: 'rgba(65, 89, 56, 1)',
        font: "",
        font_size: ""
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
    }


    const changeFontSize = (value) => {
        dispatch({
            type: FONT_SIZE,
            payload:value
        })
    }










    return (
        <ArtBoardContext.Provider value={{
            color: state.color,
            font: state.font,
            font_size: state.font_size,
            changeColor,
            getFonts,
            changeFontSize,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </ArtBoardContext.Provider>
    )


}


export default ArtboardState;