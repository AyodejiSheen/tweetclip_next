import {
    //import all the actions for plan context api
    GET_PLANS,
    SORT_FEATURES,

} from './actions'




//create the Auth reducer

const planReducers = (state, action) => {

    switch (action.type) {

        case GET_PLANS:
            return {
                ...state,
                allPlans: action.payload.plans,
                loadingPlan:true
            }

        case SORT_FEATURES:
            return{
                ...state,
                features: action.payload
            }






        default:
            return state;

    }


}



export default planReducers;