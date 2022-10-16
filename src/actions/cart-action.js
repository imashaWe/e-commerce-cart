import {ADD_TO_CART, FETCH_PRODUCTS} from "./types";

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
}