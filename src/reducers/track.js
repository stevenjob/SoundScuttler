import { TRACKS_SET, TRACK_PLAY } from 'constants/actionTypes';

const initialState = {
  tracks: [],
  activeTrack: null
};

function setTracks(state, action) {
  const { tracks } = action;
  return { ...state, tracks };
}

function setPlay(state, action) {
  const { track } = action;
  return { ...state, activeTrack: track };
}

const track = (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_SET:
      return setTracks(state, action);
    case TRACK_PLAY:
      return setPlay(state, action);
    default:
      return state;
  }
};

export default track;
