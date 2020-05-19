import cities from '../../data/cities';

const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  // TODO: handle action
  switch (action.type) {
    case 'SELECTED_CITY':
      return action.payload;
    default:
      return cities;
  }
};

export default citiesReducer;
