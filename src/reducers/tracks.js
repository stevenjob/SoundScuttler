
import { SET_TRACKS } from 'constants/actionTypes';

const initialState = [];

function setTracks(state, action) {
  const { tracks } = action;
  return [...state, ...tracks];
}

const tracks = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS:
      return setTracks(state, action);
    default:
      return state;
  }
};

export default tracks;
