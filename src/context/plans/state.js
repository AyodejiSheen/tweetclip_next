
import axios from "axios";
import { useReducer } from "react";
import { baseUrl } from "../../baseUrl";
import { GET_PLANS, SORT_FEATURES } from "./actions";
import PlanContext from "./context";
import planReducers from "./reducer";





const PlanState = (props) => {


    const initialState = {
        loadingPlan: false,
        allPlans: null,
        features: null,
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(planReducers, initialState);



    //Global functions go down here (with Auth API calls)
    const getPlans = async () => {
        await axios.get(`${baseUrl}/plans`)
            .then((response) => {
                const { plans } = response.data;
                dispatch({
                    type: GET_PLANS,
                    payload: plans
                })
                // let iift = plans.map((each) => each.plansToFeatures)
                // let mainft = {iift.map((e
                // let mainft2 = mainft.map((each) => each.feature)
                // console.log(mainft2)

                // console.log(plans[0].plansToFeatures[0].feature)


                // console.log(plansToFeatures)
                // let planFeatures = data.plans.map((each) => each.plansToFeatures.feature)
                // dispatch({
                //     type: SORT_FEATURES,
                //     payload: planFeatures
                // })
            }).catch((err) => {
                console.log(err)
            })
    }





    return (
        <PlanContext.Provider value={{
            loadingPlan: state.loadingPlan,
            plans: state.plans,
            features: state.features,
            getPlans,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </PlanContext.Provider>
    )


}


export default PlanState;