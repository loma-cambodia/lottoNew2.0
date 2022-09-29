const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    console.log('appReducer',state);
    switch (action.type) {
      // Do something here based on the different types of actions
       case "SPEED_UP":
        return {
          ...state,
          user: action.payload,
          comments: 200
        }
        break;
        case "GET_USERS":
          return {
            ...state,
            users:action.payload,
            loading:false
        }
        break;
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
    
  }