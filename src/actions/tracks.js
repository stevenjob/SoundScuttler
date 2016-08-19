import { TRACKS_SET } from 'constants/actionTypes';

export const setTracks = (tracks) => ({
  type: TRACKS_SET,
  tracks
});
