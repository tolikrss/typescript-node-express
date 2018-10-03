import { ACTIONS } from '../actions/constants';

export interface ISimpleReducerState {
    readonly data: string;
}

const defaultState: ISimpleReducerState = {
    data: '',
};

export default ( state: ISimpleReducerState = defaultState, action: any ): ISimpleReducerState => {
    switch ( action.type ) {
        case ACTIONS.SIMPLE_ACTION:
            return {
                data: action.payload
            };
        default:
            return state;
    }
}