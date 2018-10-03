import { combineReducers } from 'redux';
import simpleReducer, { ISimpleReducerState } from './simple.reducer';

export interface IStoreState {
    readonly simpleData: ISimpleReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    simpleData: simpleReducer,
});