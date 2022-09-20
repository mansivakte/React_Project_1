// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment_by_one":
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };
    case "increment_by_two":
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
