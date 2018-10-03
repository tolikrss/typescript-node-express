// import { createSelector } from 'reselect';
import { IStoreState } from '../reducers/root.reducer';
import { ISimpleReducerState } from '../reducers/simple.reducer';


export const getSimpleData = (state: IStoreState): ISimpleReducerState  => state.simpleData;