
const initialState = {
    tickets:[],
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
        default: return state
    }

}