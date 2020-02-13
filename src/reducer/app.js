var initialState = {
  menu: [],
  userData: [],
  error: null,
  success: null,
  loading: false,
  token: '',
  deliveryVehicles: [],
  warehouse: [],
  metricsSpaceCalculator: [],
  forgotPassword: [],
  forgotPasswordError: {data: ''},
  registrationToken: [],
  document: '',
  categoryList: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DOCUMENT':
      return {...state, document: action.payload};
    case 'REMOVE_DOCUMENT':
      return {...state, document: ''};
    case 'SAVE_VEHICLE_LIST':
      return {...state, deliveryVehicles: action.payload};
    case 'SAVE_WAREHOUSE_LIST':
      return {...state, warehouse: action.payload};
    case 'SAVE_METRICS_SPACE_CALCULATOR':
      return {...state, metricsSpaceCalculator: action.payload};
    case 'USER_DATA_SAVE':
      return {...state, userData: action.payload};
    case 'REMOVE_USER_DATA':
      return {...state, userData: '', token: ''};
    case 'GET_TOKEN':
      return {...state, token: action.token};
    case 'SAVE_TOKEN':
      return {...state, token: action.payload};
    case 'REMOVE_TOKEN':
      return {...state, token: action.payload};
    case 'FORGOT_PASSWORD_USER_DATA':
      return {...state, forgotPassword: action.payload};
    case 'FORGOT_PASSWORD_ERROR':
      return {
        ...state,
        forgotPasswordError: action.payload,
      };
    case 'LOADING':
      if (action.payload) {
        return {
          ...state,
          loading: action.payload,
          error: null,
          success: null,
        };
      }
      return {...state, loading: action.payload};
    case 'OTP_TOKEN_R':
      return {...state, registrationToken: action.payload};
    case 'ERROR':
      return {...state, error: action.error, loading: false};
    case 'SUCCESS':
      return {...state, success: action.payload, loading: false};
    default:
      return state;
  }
}
