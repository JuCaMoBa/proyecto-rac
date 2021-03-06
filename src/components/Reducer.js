import { clearSession } from '../api/session';
import { types } from '../types/types';

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || {},
  type: JSON.parse(localStorage.getItem('type')) || 'renter',
};

export const reducer = (state, action) => {
  switch (action.type) {
  case types.signin: {
    localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn));
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    localStorage.setItem('type', JSON.stringify(action.payload.type));
    return {
      ...state,
      isLoggedIn: action.payload.isLoggedIn,
      user: action.payload.user,
      type: action.payload.type,
    };
  }
  case types.signup: {
    localStorage.setItem('isLoggedIn', JSON.stringify(action.payload.isLoggedIn));
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    localStorage.setItem('type', JSON.stringify(action.payload.type));
    return {
      ...state,
      isLoggedIn: action.payload.isLoggedIn,
      user: action.payload.user,
      type: action.payload.type,
    };
  }
  case types.signout: {
    localStorage.removeItem('user');
    localStorage.setItem('isLoggedIn', false);
    clearSession();
    return {
      isLoggedIn: false,
      type: JSON.parse(localStorage.getItem('type')),
    };
  }
  case types.type: {
    localStorage.setItem('type', JSON.stringify(action.payload.type));
    return {
      ...state,
      type: action.payload.type,
    };
  }
  case types.profile: {
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    return {
      ...state,
      user: action.payload.user,
    };
  }

  default:
    return state;
  }
};
