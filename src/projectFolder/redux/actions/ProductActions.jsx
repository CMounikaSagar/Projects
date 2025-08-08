import { ActionTypes, SET_PRODUCTS, SELECTED_PRODUCT } from "../contents/action-types"

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products) => {
    return {
        type: SELECTED_PRODUCT,
        payload: products
    }
}