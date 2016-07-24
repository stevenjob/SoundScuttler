import { connect } from 'react-redux';
import Stream from './Stream';

const mapStateToProps = (state) => {
  const tracks = state.tracks;
  return {
    tracks
  };
};

export default connect(mapStateToProps)(Stream);
