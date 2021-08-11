// init state
export const initialState = {
    user: null,
};

// action types
export const actionTypes = {
    SET_USER: "SET_USER",
};

// user reducer
const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.SET_USER:
        return{
            ...state,
            user: action.user,
        };
        default: 
         return state;
    }
};

export default reducer;