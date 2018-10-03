import { ACTIONS } from './constants';

import { AnyAction } from 'redux';

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

export type MainAction = ISimpleAction; // | ISimpleAction2 | null і тд.
