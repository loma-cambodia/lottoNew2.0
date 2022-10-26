/* eslint-disable import/no-anonymous-default-export */

const initialState = {
    bettingsTips:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case "GET_SEARCH_BETTING_TIPS":
        return {
            ...state,
            bettingsTips:action.payload,
            loading:false

        }
        default: return state
    }
}