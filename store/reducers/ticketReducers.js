
const initialState = {
    tickets:[],  // unsettled reports
    reportsSettleData:[],  // settled report 
    ticketsChild:[],   // unsettled child
    reportsSettleChildData:[],   // unsettled child
    searchTickets:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case "GET_TICKETS":
        return {
            ...state,
            tickets:action.payload,
            loading:false

        }
        case "GET_SEARCH_TICKETS":
        return {
            ...state,
            tickets:action.payload,
            loading:false

        }
        case "GET_SEARCH_TICKETS_CHILD":
            return {
                ...state,
                reportsSettleChildData:action.payload,
                loading:false
    
            }
        case "GET_FILTER_CHILD_TICKETS":
        return {
            ...state,
            ticketsChild:action.payload,
            loading:false

        }

        case "GET_SETTLE_REPORTS":
        return {
            ...state,
            reportsSettleData:action.payload,
            loading:false

        }
        default: return state
    }

}