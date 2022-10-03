
const initialState = {
    dates:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case "GET_DATES":
        return {
            ...state,
            dates:action.payload,
            loading:false

        }
        default: return state
    }

}