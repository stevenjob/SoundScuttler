// @flow
import { TRACKS_SET, TRACK_PLAY } from 'constants/actionTypes';

type SetTracksAction = {
    type: string;
    tracks: Array<Track>;
};

type PlayTrackAction = {
    type: string;
    track: Track;
};

export const setTracks = (tracks: Array<Track>) : SetTracksAction => ({
  type: TRACKS_SET,
  tracks
});

export const playTrack = (track: Track) : PlayTrackAction => ({
  type: TRACK_PLAY,
  track
});
