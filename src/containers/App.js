import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
	// if only one reducer, then just "state.searchfield"
	// else, "state.searchRobots.searchfield".
	// you can check this by "console.log(this.props.store)"
	return {
		searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		// dispatch an action, which is setting the searchfield to be the value from the input tag, i.e. event.target.
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
};

class App extends Component {
	render() {
		console.log(process.env.REACT_APP_SAY_HI);
		return <MainPage {...this.props} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);