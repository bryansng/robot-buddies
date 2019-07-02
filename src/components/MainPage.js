import React, { Component } from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import CardList from './CardList';
import './MainPage.css';

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		const { robots, searchfield } = this.props;
		return robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
	}

	render() {
		const { isPending, onSearchChange } = this.props;

		return isPending ?
				<h1 className="tc">Loading...</h1> :
				(
					<div className="tc">
						<Header />
						<SearchBox searchChange={onSearchChange} />
						<Scroll>
							<ErrorBoundary>
								<CardList robots={this.filterRobots()} />
							</ErrorBoundary>
						</Scroll>
					</div>
				);
	}
}

export default MainPage;