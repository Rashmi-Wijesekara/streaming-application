import {
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	EDIT_STREAM,
	DELETE_STREAM,
} from "../actions/types";

const streamsReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		case CREATE_STREAM:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		case EDIT_STREAM:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		default:
			return state;
	}
};

export default streamsReducer;
