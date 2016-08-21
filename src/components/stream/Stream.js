import React, { PropTypes } from 'react';
import { CLIENT_ID } from 'constants/auth';

function Stream({ user, tracks = [], activeTrack, onAuth, onPlay }) {
  return (
    <div>
      <div>
        {
          user ?
            <div>{user.username}</div> :
            <button onClick={onAuth} type="button">Login</button>
        }
      </div>
      <br />
      <div>
      {
        tracks.map((track) => (
          <div
            className="track"
            key={track.origin.id}
          >
            {track.origin.title}
            <button
              type="button"
              onClick={() => onPlay(track)}
            >
              Play
            </button>
          </div>)
        )
      }
      </div>
      {
        activeTrack ?
          <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio> :
          null
      }
    </div>
  );
}

Stream.propTypes = {
  tracks: PropTypes.array,
  onAuth: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  user: PropTypes.object,
  activeTrack: PropTypes.object
};

export default Stream;
