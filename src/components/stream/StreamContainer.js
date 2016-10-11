import React from 'react';
import { observer } from 'mobx-react';
import { CLIENT_ID } from 'constants/auth';
import userStore from 'store/userStore';
import trackStore from 'store/trackStore';
import auth from 'actions/auth';
import Stream from './Stream';

const StreamContainer = observer(() => {
  return (
    <Stream
      me={userStore.me}
      tracks={trackStore.tracks}
      activeTrack={trackStore.activeTrack}
      clientId={CLIENT_ID}
      onAuth={auth}
      onPlay={trackStore.handlePlay}
    />
  );
});

export default StreamContainer;
