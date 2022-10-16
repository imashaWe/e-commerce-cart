import {ADD_TO_CART} from "../actions/types";

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            const index = state.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state[index].qty++;
                return state;
            } else {
                action.payload.qty = 1;
                return [...state, action.payload];
            }

        default:
            return state;
    }
}