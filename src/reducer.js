export const initialState = {
    basket: [],

};

function reducer(state, action) {
    switch(action.type){
    case 'ADD_TO_BASKET':
        //logic for adding item from basket
        break;
    case 'REMOVE_FROM_BASKET':
        //logic for removing item from basket
        break;
        default:
            return state;
    }
}

export default reducer;
