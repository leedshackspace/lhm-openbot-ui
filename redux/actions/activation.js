import * as types from '../types';

export const manualActivation = () => {
  return { type: types.MANUAL_ACTIVATION };
};

export const doorActivation = () => {};

export const noCard = () => {
  return { type: types.NO_CARD };
};
