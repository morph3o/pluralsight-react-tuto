import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [
        ...state,
        Object.assign({}, state, action.course)
      ];

    default:
      return state;
  }
};
