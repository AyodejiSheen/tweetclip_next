import {
    //import all the actions for ui context api
    CHANGE_COLOR,
    GET_FONTS

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


        default:
            return state;

    }


}



export default ArtboardReducers;