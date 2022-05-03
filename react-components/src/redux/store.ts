import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formSlice';
import homeReducer from './reducers/moviesSlice';

const rootReducer = combineReducers({ formReducer, homeReducer });

export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
