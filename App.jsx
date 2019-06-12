/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import ConnectionStatus from './components/ConnectionStatus';
import IdleView from './components/views/IdleView';
import ManualActivationView from './components/views/ManualActivationView';
import { manualActivation as manualActivationAction } from './redux/actions/activation';
import { viewTypes } from './redux/reducers/viewReducer';
import TwentyFourHourView from './components/views/24HourView';

const getView = currentView => {
  switch (currentView) {
    case viewTypes.idle:
      return <IdleView />;
    case viewTypes.manualActivation:
      return <ManualActivationView />;
    case viewTypes.twentyFourView:
      return <TwentyFourHourView />;
    default:
      return null;
  }
};

const App = ({ currentView, manualActivation }) => {
  const view = getView(currentView);
  const trigger = e => {
    e.preventDefault();
    if (currentView === 'idle') {
      manualActivation();
    }
  };
  return (
    <>
      <div
        className="openbot-container"
        onClick={trigger}
        onKeyPress={trigger}
        role="main"
      >
        {view}
        <ConnectionStatus />
      </div>
    </>
  );
};

App.propTypes = {
  currentView: string.isRequired,
  manualActivation: func.isRequired,
};

const mapStateToProps = state => {
  return {
    currentView: state.views.currentView,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    manualActivation: () => dispatch(manualActivationAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
