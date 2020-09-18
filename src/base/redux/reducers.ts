import { combineReducers } from 'redux';
import TodoReducer from '../../modules/todo/redux/reducer';

export default combineReducers({
  list: TodoReducer,
});
