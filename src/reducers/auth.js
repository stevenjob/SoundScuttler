import { ME_SET } from 'constants/actionTypes';

function setMe(state, action) {
  const { user } = action;
  return { ...state, user };
}

const auth = (state = {}, action) => {
  switch (action.type) {
    case ME_SET:
      return setMe(state, action);
    default:
      return state;
  }
};

export default auth;
