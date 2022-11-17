import {
    //import all the actions for ui context api
    CHANGE_COLOR,
    GET_FONTS,
    FONT_SIZE,
    GET_SINGLE_ARTBOARD,
    GET_ALL_ARTBOARDS,


} from './actions'




//create the Auth reducer

const ArtboardReducers = (state, action) => {

    switch (action.type) {

        case CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            }

        case GET_FONTS:
            return{
                ...state,
                font:action.payload
            }

        case FONT_SIZE:
            return{
                ...state,
                font_size:action.payload
            }
        
        case GET_ALL_ARTBOARDS:
            return{
                ...state,
                allArtboards : action.payload
            }





        default:
            return state;

    }


}



export default ArtboardReducers;