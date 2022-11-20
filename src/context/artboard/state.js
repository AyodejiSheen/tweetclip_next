
import axios from "axios";
import { useContext, useReducer } from "react";
import { baseUrl } from "../../baseUrl";
import setAuthToken from "../auth/setAuthToken";
import UiContext from "../UI/context";
import ArtBoardContext from "./context";
import ArtboardReducers from "./reducer";


import { CHANGE_COLOR, GET_FONTS, FONT_SIZE, GET_ALL_ARTBOARDS, NEW_TWEET, GET_SINGLE_ARTBOARD } from "./actions";
import { useNavigate } from "react-router-dom";






const ArtboardState = (props) => {


    const initialState = {
        allProjects: null,
        singleArtboard: null,
        artboardLoading: false,
        artboardProps: null,
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(ArtboardReducers, initialState);

    const navigate = useNavigate()
    let { setAlert, showItem } = useContext(UiContext)


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



    const getAllProjects = async () => {

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
        await axios.post(`${baseUrl}/get_tweet`, value)
            .then((response) => {
                const { data } = response
                console.log(data)
                dispatch({
                    type: NEW_TWEET,
                    payload: data.artBoard
                })
                setAlert({ msg: data.message, type: "success" })
                navigate(`dashboard/project/${data.artBoard.id}`)
                showItem('import')
            }).catch((err) => {
                const { data } = err.response;
                if (data.isSuccess === false) {
                    setAlert({ msg: data.message, type: "fail" })
                }
            })
    }


    const getSingleArtboard = async (id) => {
        if (localStorage.ctoken) {
            setAuthToken(localStorage.ctoken)
        }
        await axios.get(`${baseUrl}/artboard/${id}`)
            .then((response) => {
                const { data } = response
                console.log(data.artboard.props)
                dispatch({
                    type: GET_SINGLE_ARTBOARD,
                    payload: data.artboard
                })
                setAlert({ msg: data.message, type: "success" })
            }).catch((err) => {
                const { data } = err.response;
                if (data.isSuccess === false) {
                    setAlert({ msg: data.message, type: "fail" })
                    navigate('dashboard')
                }
            })
    }



    return (
        <ArtBoardContext.Provider value={{
            color: state.color,
            font: state.font,
            font_size: state.font_size,
            allProjects: state.allProjects,
            singleArtboard: state.singleArtboard,
            artboardLoading: state.artboardLoading,
            artboardProps: state.artboardProps,
            changeColor,
            getFonts,
            changeFontSize,
            getAllProjects,
            getTweet,
            getSingleArtboard,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </ArtBoardContext.Provider>
    )


}


export default ArtboardState;