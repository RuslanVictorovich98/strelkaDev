import { Reducer } from 'redux';
import { TestState } from '../../model/training';
import { TrainingMessage, SET_TRAINING } from '../message/training';


export const initialState = {
    trainings: [
        {}],
    currentTraining: {}
}

export type Training = Reducer<TestState, TrainingMessage>; 

//@ts-ignore
export const trainingReducer = (state = initialState, message) => {

    switch(message.type) {
        case SET_TRAINING: 
            const data = [message.payload]
            console.log('message', data);

            return { 
                ...state,
                trainings: [message.payload]
            }
            
        default:
            return state;
    }
}