import { iReducerAction } from '../../../utils/Interfaces';
import { SET_TODOS } from './actions';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action: iReducerAction) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
