import { ActionTypes } from "../Constants/action-types";

const initialState = {
    products: [
        {
        id:1,
        title:"Fjallraven",
        category:"men's clothing",
        },
],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};