import {ALL_ACTIONS} from './allActions';

export const simpleAction = () => dispatch => {
	dispatch({
		type: ALL_ACTIONS.SIMPLE_ACTION,
		payload: 'result_of_simple_action'
	})
}