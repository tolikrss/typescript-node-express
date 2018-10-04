import { ACTIONS } from './constants';

import { Action, ActionCreator, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IStoreState } from '../reducers/root.reducer';

import * as api from '../services/requests/films-request';

export interface ISimpleAction extends AnyAction {
    type: ACTIONS.SIMPLE_ACTION;
    payload: any;
}

export function simpleAction(): ISimpleAction {
    return {
        payload: 'new data',
        type: ACTIONS.SIMPLE_ACTION,
    };
}

export type AsyncThunkActionCreator = ActionCreator<ThunkAction<Promise<Action>, IStoreState, void, Action<any>>>;
export type AsyncThunkAction = ThunkAction<Promise<Action>, IStoreState, void, Action<any>>;

export function asyncThunkAction(): any {
    return async ( dispatch: ThunkDispatch<IStoreState, void, Action> ) => {
        dispatch( { type: ACTIONS.START_FETCH_ALL_FILMS } );
        try {
            const films = await api.getAllFilms();
            return dispatch( {
                type: ACTIONS.SUCCESS_FETCH_ALL_FILMS,
                payload: films,
            } );
        } catch ( e ) {
            return dispatch( {
                type: ACTIONS.ERROR_FETCH_ALL_FILMS,
            } );
        }
    };
}

export type MainAction = ISimpleAction | AsyncThunkAction; // | ISimpleAction2 | null і тд.


// EXAMPLES
interface Car {
    id: number;
    name: string;
    color: string;
}

export class FetchAction implements AnyAction {
    public readonly type = ACTIONS.fetch;

    constructor( public cars: Array<Car> ) {
    }
}

export class CreateAction implements AnyAction {
    public readonly type = ACTIONS.create;

    constructor( public car: Car, public payload: string ) {
    }
}

export function createCar( car: Car ): ThunkAction<{}, {}, {}, AnyAction> {
    return async ( dispatch, getState, fetch ) => {
        // const response = await fetch( '/cars' );
        // dispatch( new CreateAction( response ) );
    };
}
