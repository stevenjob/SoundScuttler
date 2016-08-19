import { combineReducers } from 'redux';
import tracks from './tracks';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  tracks,
  routing
});

export default rootReducer;
