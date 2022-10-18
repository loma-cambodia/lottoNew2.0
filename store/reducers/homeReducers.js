const initialState = {
    winnerResultDetails:[],
    announcementDetails:[],
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

        case "ANNOUNCEMENT_DETAILS":
            return {
                ...state,
                announcementDetails:action.payload,
                loading:false
            }
        default: return state
    }

}