import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/types";

export default function cartReducer(state = [], action) {
    const index = state.findIndex((item) => item.id === action.payload.id);
    switch (action.type) {
        case ADD_TO_CART:
            if (index !== -1) {
                state[index].qty++;
                return [...state];
            } else {
                action.payload.qty = 1;
                return [...state, action.payload];
            }

        case REMOVE_FROM_CART:
            if (state[index].qty === 1) {
                state.slice(index,1);
                return [...state];
            } else {
                state[index].qty--;
                return [...state];
            }

        default:
            return state;
    }
}