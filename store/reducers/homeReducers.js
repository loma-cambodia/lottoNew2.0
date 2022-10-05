const initialState = {
    winnerResultDetails:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case "WINNER_RESULT_DETAILS":
            return {
                ...state,
                winnerResultDetails:action.payload,
                loading:false
    
            }
        default: return state
    }

}