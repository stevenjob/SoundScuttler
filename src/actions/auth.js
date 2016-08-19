import { CLIENT_ID, REDIRECT_URI } from 'constants/auth';
import { ME_SET } from 'constants/actionTypes';
import { setTracks } from 'actions/tracks';
import SC from 'soundcloud';

const setMe = (user) => ({
  type: ME_SET,
  user
});

const fetchStream = (me, session) => (dispatch) => {
  fetch(`//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setTracks(data.collection));
    });
};

export const auth = () => (dispatch) => {
  SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });
  SC.connect().then((session) => {
    fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
      .then((response) => response.json())
      .then((me) => {
        dispatch(setMe(me));
        dispatch(fetchStream(me, session));
      });
  });
};
