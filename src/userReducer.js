import { SET_USER } from './types';

const userReducer = (state = [], action) => {
  switch (action.payload) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;