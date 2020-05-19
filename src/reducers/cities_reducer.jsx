const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  // TODO: handle action
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
