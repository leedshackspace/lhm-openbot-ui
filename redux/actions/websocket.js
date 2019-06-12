import * as types from '../types';

export const connecting = () => {
  return { type: types.WEBSOCKET_CONNECTING };
};

export const connected = () => {
  return { type: types.WEBSOCKET_CONNECTED };
};

export const connectionError = () => {
  return { type: types.WEBSOCKET_CONNECTIONERROR };
};

export const connectionTimeout = () => {
  return { type: types.WEBSOCKET_CONNECTIONTIMEOUT };
};

export const error = () => {
  return { type: types.WEBSOCKET_ERROR };
};

export const disconnect = () => {
  return { type: types.WEBSOCKET_DISCONNECT };
};

export const reconnect = () => {
  return { type: types.WEBSOCKET_RECONNECT };
};

export const reconnecting = () => {
  return { type: types.WEBSOCKET_RECONNECTING };
};

export const reconnectError = () => {
  return { type: types.WEBSOCKET_RECONNECTERROR };
};
