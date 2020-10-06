import { TestModel } from '../../model/training'


export const SET_TRAINING = 'SET_TRAINING';

export interface MessageWithPayload<T, P> {
    type: T;
    payload: P;
}

export type SetTraining = MessageWithPayload<typeof SET_TRAINING, TestModel>


export const setTraining = (training: TestModel): SetTraining => ({
    type: SET_TRAINING,
    payload: training
});

export type TrainingMessage =
    |SetTraining