import { combineReducers } from 'redux';
import track from './track';
import auth from './auth';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  auth,
  track,
  routing
});

export default rootReducer;
