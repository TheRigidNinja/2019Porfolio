    
const InitState = {
    handleFilterClick: Object,
}

const rootReducer = (state = InitState, action) => {
    if (action.type === "FILTER") { 
        return { ...InitState, handleFilterClick: action.data }; 
    }
}

export default rootReducer;