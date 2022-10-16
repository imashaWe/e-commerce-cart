import {FETCH_PRODUCTS} from "./types";
import axios from "axios";

export const fetchProducts = () => {
    return (dispatch) => {
        return axios.get('products').then((response) => {
            dispatch(
                {
                    type: FETCH_PRODUCTS,
                    payload: response.data.products
                }
            )
        })
    }
}