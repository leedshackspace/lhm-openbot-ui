import * as types from '../types';

const statusCodes = {
  disconnected: 'Disconnected from HSM.',
  connected: 'Websocket Connection to HSM established.',
  connectionLost: 'Websocket Connection Dropped.',
  connecting: 'Connecting to HSM...',
  reconnecting: 'Attempting to reconnect to HSM...',
  connectionError: 'Error whilst trying to connect to HSM.',
  connectionTimeout: 'Connection attempt timed out.',
  error: 'Websocket Error.',
  reconnectError: 'Failed to reconnect to HSM.',
};

const initialState = {
  connected: false,
  connectionStatus: statusCodes.disconnected,
};

const websocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WEBSOCKET_CONNECTING:
      return { ...state, connectionStatus: statusCodes.connecting };
    case types.WEBSOCKET_CONNECTED:
      return { ...state, connectionStatus: statusCodes.connected };
    case types.WEBSOCKET_CONNECTIONERROR:
      return { ...state, connectionStatus: statusCodes.connectionError };
    case types.WEBSOCKET_CONNECTIONTIMEOUT:
      return { ...state, connectionStatus: statusCodes.connectionTimeout };
    case types.WEBSOCKET_ERROR:
      return { ...state, connectionStatus: statusCodes.error };
    case types.WEBSOCKET_DISCONNECT:
      return { ...state, connectionStatus: statusCodes.connectionLost };
    case types.WEBSOCKET_RECONNECT:
      return { ...state, connectionStatus: statusCodes.connected };
    case types.WEBSOCKET_RECONNECTING:
      return { ...state, connectionStatus: statusCodes.reconnecting };
    case types.WEBSOCKET_RECONNECTERROR:
      return { ...state, connectionStatus: statusCodes.reconnectError };
    default:
      return state;
  }
};

export default websocketReducer;
