import {
    //import all the actions for ui context api
    CHANGE_COLOR

} from './actions'




//create the Auth reducer

const ArtboardReducers = (state, action) => {

    switch (action.type) {

        case CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            }


        default:
            return state;

    }


}



export default ArtboardReducers;