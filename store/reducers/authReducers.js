const initialState = {
    auth:{},
    transactions:{},
    loading:true,
    lang:''
}

export default function(state = initialState, action){

    switch(action.type){
        case "GET_LOGIN_DETAILS":
        return {
            ...state,
            auth:action.payload,
            loading:false
        }
        case "TRANSACTION_DETAILS":
            return {
                ...state,
                transactions:action.payload,
                loading:false
    
            }

        case "CHANGE_LANGUAGE":
            return {
                ...state,
                lang:action.payload
    
            }
        default: return state
    }

}