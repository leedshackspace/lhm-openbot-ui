import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

const ConnectionStatus = ({ connectionStatus }) => (
  <div className="openbot-connectionstatus">
    <h6>{connectionStatus}</h6>
    <h6>Net2 Event Handler Status: Up</h6>
  </div>
);

ConnectionStatus.propTypes = {
  connectionStatus: string.isRequired,
};

const mapStateToProps = state => {
  return {
    connectionStatus: state.websocket.connectionStatus,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ConnectionStatus);
