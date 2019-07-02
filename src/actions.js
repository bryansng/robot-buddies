import { CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED }
from './constants.js';

import { apiCall } from './api';

// redux will see that is runs a function,
// so it simply runs it.
// FYI: the below returns an object with type and payload.
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

// redux will see that it returns a function,
// so it will pass in the dispatcher to this function.
export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	apiCall('https://jsonplaceholder.typicode.com/users')
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
};