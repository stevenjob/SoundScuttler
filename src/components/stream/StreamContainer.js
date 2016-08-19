import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from 'actions/auth';
import Stream from './Stream';

const mapStateToProps = (state) => {
  const tracks = state.tracks;
  return {
    tracks
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAuth: bindActionCreators(auth, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
