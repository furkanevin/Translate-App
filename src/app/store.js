import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatSlice from './chatState';

const rootReducer = combineReducers({
  chatState: chatSlice,
});

export default configureStore({ reducer: rootReducer });
