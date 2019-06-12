import { combineReducers } from 'redux';
import websocketReducer from './websocketReducer';
import viewReducer from './viewReducer';

export default combineReducers({
  websocket: websocketReducer,
  views: viewReducer,
});
