// TODO: add and export your own actions
import cities from '../../data/cities';

export function setCities() {
  // API calls if we have one
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: 'SELECTED_CITY',
    payload: city
  };
}
