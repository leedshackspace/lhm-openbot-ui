import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { noCard as noCardAction } from '../../redux/actions/activation';

const HS_NAME = 'Leeds Hackspace.';

const ManualActivationView = ({ noCard }) => (
  <div className="openbot-manualactivationview">
    <h2 className="openbot-subtitle">Welcome back to {HS_NAME}</h2>
    <h1 className="openbot-title">Please scan your card.</h1>
    <button type="button" onClick={noCard} className="openbot-button">
      I&apos;ve not got my card
    </button>
  </div>
);

ManualActivationView.propTypes = {
  noCard: func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    noCard: () => dispatch(noCardAction()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ManualActivationView);
