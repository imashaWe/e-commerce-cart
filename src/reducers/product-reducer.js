import {FETCH_PRODUCTS} from "../actions/types";

export default function productReducer(state=[], action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}