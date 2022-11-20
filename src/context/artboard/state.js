
import axios from "axios";
import { useContext, useReducer } from "react";
import { baseUrl } from "../../baseUrl";
import setAuthToken from "../auth/setAuthToken";
import UiContext from "../UI/context";
import ArtBoardContext from "./context";
import ArtboardReducers from "./reducer";


import { CHANGE_COLOR, GET_FONTS, FONT_SIZE, GET_ALL_ARTBOARDS, NEW_TWEET } from "./actions";
import { useNavigate } from "react-router-dom";






const ArtboardState = (props) => {


    const initialState = {
        color: '#ffffff',
        font: "",
        font_size: 40,
        allArtboards: null,
        singleArtboard: null,
        artboardLoading: false,
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(ArtboardReducers, initialState);

    const navigate = useNavigate()
    let { setAlert } = useContext(UiContext)


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
            payload: value
        })
    }



    const getAllArtboards = async () => {

        if (localStorage.ctoken) {
            setAuthToken(localStorage.ctoken)
        }

        await axios.get(`${baseUrl}/artboard`)
            .then((response) => {
                const { data } = response
                dispatch({
                    type: GET_ALL_ARTBOARDS,
                    payload: data.artboards
                })
            }).catch((err) => {
                const { data } = err.response
                setAlert({ msg: data.message, type: "fail" })
            })
    }


    const getTweet = async (value) => {

        if (localStorage.ctoken) {
            setAuthToken(localStorage.ctoken)
        }

        console.log(value)
        await axios.post(`${baseUrl}/get_tweet`, value)
            .then((response) => {
                const { data } = response
                console.log(data)
                dispatch({
                    type: NEW_TWEET,
                    payload: data.artBoard
                })
                setAlert({ msg: data.message, type: "success" })
                navigate('dashboard/project')
            }).catch((err) => {
                const { data } = err.response;
                if (data.isSuccess === false) {
                    setAlert({ msg: data.message, type: "fail" })
                }
            })
    }









    return (
        <ArtBoardContext.Provider value={{
            color: state.color,
            font: state.font,
            font_size: state.font_size,
            allArtboards: state.allArtboards,
            changeColor,
            getFonts,
            changeFontSize,
            getAllArtboards,
            getTweet,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </ArtBoardContext.Provider>
    )


}


export default ArtboardState;