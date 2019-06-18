import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';
import './App.css';
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
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { isPending, robots, searchfield, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));

		return isPending ?
				<h1 className="tc">Loading...</h1> :
				(
					<div className="tc">
						<Header />
						<SearchBox searchChange={onSearchChange} />
						<Scroll>
							<ErrorBoundary>
								<CardList robots={filteredRobots} />
							</ErrorBoundary>
						</Scroll>
					</div>
				);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);