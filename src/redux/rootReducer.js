import {combineReducers} from 'redux';
import { filterReducer } from './filters/reducer';
import { todoReducers } from './todos/reducers';

export const rootReducer = combineReducers({
  todos: todoReducers,
   filters: filterReducer
})