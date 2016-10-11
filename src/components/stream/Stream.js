import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { CLIENT_ID } from 'constants/auth';
import { observer } from 'mobx-react';

@observer
class Stream extends Component {

  componentDidUpdate() {
    // eslint-disable-next-line
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if (!audioElement) { return; }

    const { activeTrack } = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render() {
    const { user, tracks = [], activeTrack, onAuth, onPlay } = this.props;

    return (
      <div>
        <div>
          {
            user ?
              <div>{user.username}</div> :
              <button
                onClick={onAuth}
                type="button"
              >
                Login
              </button>
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
              </div>
            ))
          }
        </div>
        {
          activeTrack ?
            <audio
              id="audio"
              // eslint-disable-next-line
              ref="audio"
              src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}
            /> :
            null
        }
      </div>
    );
  }
}

Stream.propTypes = {
  activeTrack: PropTypes.object,
  onAuth: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  tracks: PropTypes.array,
  user: PropTypes.object
};

export default Stream;
