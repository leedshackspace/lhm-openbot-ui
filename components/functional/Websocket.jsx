import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { func, node } from 'prop-types';
import {
  connecting as connectingAction,
  connected as connectedAction,
  connectionError as connectionErrorAction,
  connectionTimeout as connectionTimeoutAction,
  error as errorAction,
  disconnect as disconnectAction,
  reconnect as reconnectAction,
  reconnecting as reconnectingAction,
  reconnectError as reconnectErrorAction,
} from '../../redux/actions/websocket';
import WebsocketContext from './WebsocketContext';

class Websocket extends Component {
  static propTypes = {
    connecting: func.isRequired,
    connected: func.isRequired,
    connectionError: func.isRequired,
    connectionTimeout: func.isRequired,
    error: func.isRequired,
    disconnect: func.isRequired,
    reconnect: func.isRequired,
    reconnecting: func.isRequired,
    reconnectError: func.isRequired,
    children: node.isRequired,
  };

  componentDidMount() {
    const {
      connecting,
      connected,
      connectionError,
      connectionTimeout,
      error,
      disconnect,
      reconnect,
      reconnecting,
      reconnectError,
    } = this.props;
    connecting();
    this.io = io('localhost:5000');
    this.io.on('connect', connected);
    this.io.on('connect_error', connectionError);
    this.io.on('connect_timeout', connectionTimeout);
    this.io.on('error', error);
    this.io.on('disconnect', disconnect);
    this.io.on('reconnect', reconnect);
    this.io.on('reconnecting', reconnecting);
    this.io.on('reconnect_error', reconnectError);
  }

  render() {
    const { children } = this.props;
    const context = {};
    return (
      <WebsocketContext.Provider value={context}>
        {children}
      </WebsocketContext.Provider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    connecting: () => dispatch(connectingAction()),
    connected: () => dispatch(connectedAction()),
    connectionError: () => dispatch(connectionErrorAction()),
    connectionTimeout: () => dispatch(connectionTimeoutAction()),
    error: () => dispatch(errorAction()),
    disconnect: () => dispatch(disconnectAction()),
    reconnect: () => dispatch(reconnectAction()),
    reconnecting: () => dispatch(reconnectingAction()),
    reconnectError: () => dispatch(reconnectErrorAction()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Websocket);
