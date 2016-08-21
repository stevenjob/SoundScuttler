import { TRACKS_SET, TRACK_PLAY } from 'constants/actionTypes';

export const setTracks = (tracks) => ({
  type: TRACKS_SET,
  tracks
});

export const playTrack = (track) => ({
  type: TRACK_PLAY,
  track
});
