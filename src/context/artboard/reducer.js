import {
    //import all the actions for ui context api
    CHANGE_COLOR,
    GET_FONTS,
    FONT_SIZE,
    GET_SINGLE_ARTBOARD,
    GET_ALL_ARTBOARDS,
    NEW_TWEET,
    CHANGE_BG_COLOR

} from './actions'




//create the Auth reducer

const ArtboardReducers = (state, action) => {

    switch (action.type) {

        case CHANGE_COLOR:
            return {
                ...state,
                artboardProps: { fontColor: action.payload }
            }
        case CHANGE_BG_COLOR:
            return {
                ...state,
                artboardProps: { bgColor: action.payload }
            }

        case GET_FONTS:
            return {
                ...state,
                artboardProps: { fontStyle: action.payload }
            }

        case FONT_SIZE:
            return {
                ...state,
                artboardProps: { fontSize: action.payload }
            }

        case GET_ALL_ARTBOARDS:
            return {
                ...state,
                allProjects: action.payload,
                allArtboardLoading: true,
                projectId:null,
            }

        case NEW_TWEET:
            let res = action.payload
            return {
                ...state,
                allProjects: { ...state.Projects, res },
                artboardLoading: true,
                allArtboardLoading: false,
                projectId: res.id
            }

        case GET_SINGLE_ARTBOARD:
            return {
                ...state,
                singleArtboard: action.payload,
                artboardProps: action.payload.props,
                artboardLoading: true,
                allArtboardLoading: false,
                projectId: action.payload.id
            }





        default:
            return state;

    }


}



export default ArtboardReducers;