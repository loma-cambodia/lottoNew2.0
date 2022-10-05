const initialState = {
    auth:{},
    transactions:{},
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case "GET_LOGIN_DETAILS":
        return {
            ...state,
            dates:action.payload,
            loading:false

        }
        case "TRANSACTION_DETAILS":
            return {
                ...state,
                transactions:action.payload,
                loading:false
    
            }
        default: return state
    }

}