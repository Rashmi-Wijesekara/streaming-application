import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	EDIT_STREAM,
	DELETE_STREAM,
} from "./types";
import streams from "../api/streams";
import SessionHandler from "../SessionHandler";
import history from '../history'

export const signIn = (userId, currentUser) => {
	const sessionHandler = new SessionHandler();

	if (!sessionHandler.isAuthenticated())
		sessionHandler.saveCurrentUser(currentUser);

	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	const sessionHandler = new SessionHandler();

	sessionHandler.deleteCurrentUser();
	return {
		type: SIGN_OUT,
	};
};

export const createStream =
	(formValues) => async (dispatch, getState) => {
		const { userId } = getState().auth;

		const response = await streams.post("/streams", {
			...formValues,
			userId,
		});
		dispatch({
			type: CREATE_STREAM,
			payload: response.data,
		});

		history.replace("/");
	};

export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get("/streams");
	console.log("fetched streams list from the API");
	dispatch({
		type: FETCH_STREAMS,
		payload: response.data,
	});
};

export const fetchStream =
	(streamId) => async (dispatch) => {
		const response = await streams.get(
			"/streams/" + streamId
		);
		dispatch({
			type: FETCH_STREAM,
			payload: response.data,
		});
	};

export const editStream =
	(id, formValues) => async (dispatch) => {
		const response = await streams.patch(
			"/streams/" + id,
			formValues
		);
		dispatch({
			type: EDIT_STREAM,
			payload: response.data,
		});

		history.replace("/");
	};

export const deleteStream =
	(streamId) => async (dispatch) => {
		await streams.delete("streams/" + streamId);
		dispatch({
			type: DELETE_STREAM,
			payload: streamId,
		});

		history.replace("/");
	};
