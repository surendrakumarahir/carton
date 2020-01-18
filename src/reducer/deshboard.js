import {GET_FEATURED_PRODUCT, GET_LATEST_PRODUCT} from '../actions/types';
let initialState = {
  featured_product: [],
  latest_product: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    // extra
    case GET_FEATURED_PRODUCT:
      return {...state, featured_product: action.payload};
    case GET_LATEST_PRODUCT:
      return {...state, latest_product: action.payload};
    default:
      return state;
  }
}
