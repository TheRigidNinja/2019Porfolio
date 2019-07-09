    
const InitState = {
    FeedLength: Object,
}

const rootReducer = (state = InitState, action) => {
    if (action.type === "FEEDLENGTH") { 
        return { ...InitState, FeedLength: action.data }; 
    }
}

export default rootReducer;