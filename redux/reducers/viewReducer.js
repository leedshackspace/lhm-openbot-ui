import * as types from '../types';

export const viewTypes = {
  idle: 'idle',
  manualActivation: 'manual_activation',
  twentyFourView: '24_hour_view',
};

const initialState = {
  currentView: 'idle',
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MANUAL_ACTIVATION:
      return { ...state, currentView: viewTypes.manualActivation };
    case types.NO_CARD:
      return { ...state, currentView: viewTypes.twentyFourView };
    default:
      return state;
  }
};

export default viewReducer;
