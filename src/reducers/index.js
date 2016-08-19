import { combineReducers } from 'redux';
import tracks from './tracks';
import auth from './auth';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  auth,
  tracks,
  routing
});

export default rootReducer;
