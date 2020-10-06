import {combineReducers} from 'redux';
import { trainingReducer } from '../reducers/training';

export const reducers = combineReducers ({
    training:  trainingReducer,
});