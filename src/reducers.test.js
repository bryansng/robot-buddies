import { CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED }
from './constants.js';

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchfield: ''
	}

	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
	})

	it('should handle CHANGE_SEARCHFIELD', () => {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({
			searchfield: 'abc'
		})
	})
})

describe('requestRobots', () => {
	const initialStateRobots = {
		error: '',
		robots: [],
		isPending: false
	}

	it('should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
	})

	it('should handle REQUEST_ROBOTS_PENDING action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING
		})).toEqual({
			error: '',
			robots: [],
			isPending: true
		})
	})

	it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: '123',
				name: 'test',
				email: 'test@gmail.com'
			}]
		})).toEqual({
			error: '',
			robots: [{
				id: '123',
				name: 'test',
				email: 'test@gmail.com'
			}],
			isPending: false
		})
	})

	it('should handle REQUEST_ROBOTS_FAILED action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'No payload :('
		})).toEqual({
			error: 'No payload :(',
			robots: [],
			isPending: false
		})
	})
})