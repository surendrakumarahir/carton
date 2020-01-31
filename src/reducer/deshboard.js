import {
  GET_CATEGORY_LIST,
  GET_FEATURED_PRODUCT,
  GET_LATEST_PRODUCT,
} from '../actions/types';
let initialState = {
  featured_product: [],
  latest_product: [],
  categoryList: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    // extra
    case GET_FEATURED_PRODUCT:
      return {...state, featured_product: action.payload};
    case GET_LATEST_PRODUCT:
      return {...state, latest_product: action.payload};
     case  GET_CATEGORY_LIST:
    return {...state, categoryList: action.payload}
    default:
      return state;
  }
}
