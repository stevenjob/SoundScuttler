import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'actions/auth';
import { playTrack } from 'actions/track';
import Stream from './Stream';

const mapStateToProps = (state) => {
  const { user } = state.auth;
  const { tracks, activeTrack } = state.track;
  return {
    user,
    tracks,
    activeTrack
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAuth: bindActionCreators(auth, dispatch),
  onPlay: bindActionCreators(playTrack, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
