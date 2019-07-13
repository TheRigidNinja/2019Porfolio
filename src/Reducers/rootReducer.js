    
const InitState = {
    FeedLength: Object,
}

const rootReducer = (state = InitState, action) => {
    if (action.type === "FEEDLENGTH") { 
        return { ...state, FeedLength: action.data }; 
    }

    if (action.type === "SEARCHPERIMETERS") { 
        return { ...state, SearchPerimeters: action.data }; 
    }

    if (action.type === "OBJECTSEARCH") { 
        return { ...state, ObjectSearch: action.data }; 
    }

    return state
}

export default rootReducer;