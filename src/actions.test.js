import { CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED }
from './constants.js';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
	const text = 'wooo';
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
	// create fake store that has the thunk middleware (waits for any function that are returned from an action).
	const store = mockStore();

	// requestRobots takes in dispatch as argument, so we call the dispatch function which will automatically pass the dispatch to requestRobots.
	store.dispatch(actions.requestRobots());

	// requestRobots will then dispatch the action with the type inside an object.
	const action = store.getActions();

	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING,
	}
	expect(action[0]).toEqual(expectedAction);
})

/* describe('test robots API', () => {
	afterEach(() => {
		fetchMock.reset()
		fetchMock.restore()
	})
	
	it('handles requesting robots API with success', () => {
		fetchMock.getOnce('/users', {
			body: { users: [{ id: '123', name: 'test', email: 'test@gmail.com' }] },
			headers: { 'content-type': 'application/json' }
		})
	
		const expectedAction = {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: { id: '123', name: 'test', email: 'test@gmail.com' }
		}
		const store = mockStore({ users: [] });
	
		return store.dispatch(actions.requestRobots()).then(() => {
				expect(store.getActions()).toEqual(expectedAction);
			})
	})
}) */