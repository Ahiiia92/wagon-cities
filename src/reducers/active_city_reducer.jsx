import { SELECTED_CITY } from '../actions';

const activeCityReducer = (state = null, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case SELECTED_CITY:
      return action.payload;
    default:
      return state;
  }
};

export default activeCityReducer;
