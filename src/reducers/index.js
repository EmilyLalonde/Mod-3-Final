import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { messageReducer } from './messageReducer'

const rootReducer = combineReducers({
  user: user,
  errorMsg: errorMsg,
  messages: messageReducer

});

export default rootReducer;