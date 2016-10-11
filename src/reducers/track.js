// @flow
import { TRACKS_SET, TRACK_PLAY } from 'constants/actionTypes';

type Track = {
  // specify your track object
};

type State = {
  tracks: Array<Track>;
  activeTrack: ?Track;
};

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

const track = (state: State = initialState, action: Object) : State => {
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
