
import axios from "axios";
import { CHANGE_COLOR, GET_FONTS } from "./actions";
import ArtBoardContext from "./context";




const { useReducer } = require("react");
const { default: ArtboardReducers } = require("./reducer")





const ArtboardState = (props) => {


    const initialState = {
        color:'rgba(65, 89, 56, 1)',
        fonts:null
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


        const getAllFonts = async () => {
        await axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBK8VFSnh9WoRo5JX5aBAs8U3tbrVItkYQ').then((response) => {
            const {data} = response;
            const {items} = data;
            dispatch({
                type:GET_FONTS,
                payload:items
            })
        }).catch((err) => {
            console.log(err)
        })
    }












    return (
        <ArtBoardContext.Provider value={{
                color:state.color,
                fonts:state.fonts,
                changeColor,
                getAllFonts
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </ArtBoardContext.Provider>
    )


}


export default ArtboardState;