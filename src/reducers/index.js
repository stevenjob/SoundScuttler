import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import track from './track';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
  track,
  routing
});

export default rootReducer;
