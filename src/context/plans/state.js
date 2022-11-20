
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
            }).catch((err) => {
                console.log(err)
            })
    }


    const userSubscribe = async (priceId) => {
        await axios.post(`${baseUrl}/transaction/${priceId}`)
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
    }





    return (
        <PlanContext.Provider value={{
            loadingPlan: state.loadingPlan,
            allPlans: state.allPlans,
            features: state.features,
            getPlans,
            userSubscribe,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </PlanContext.Provider>
    )


}


export default PlanState;