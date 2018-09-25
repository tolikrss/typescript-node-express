import {ALL_ACTIONS} from "../actions/allActions";

export default (state = {}, action) => {
	switch (action.type) {
		case ALL_ACTIONS.SIMPLE_ACTION:
			return {
				result: action.payload
			};
		default:
			return state
	}
}