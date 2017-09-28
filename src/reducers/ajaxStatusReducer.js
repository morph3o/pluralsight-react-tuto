import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * This is useful to know when an action ends in success
 * */
const actionTypeEndsInSuccess = (type) => {
  return type.substring(type.length - 8) === '_SUCCESS';
};

export default (state = initialState.numAjaxCallsInProgress, action) => {
  if(action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if(action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
};
