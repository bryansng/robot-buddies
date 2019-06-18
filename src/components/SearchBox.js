import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 b--green bg-lightest-blue"
				aria-label="Search Robots"
				type="search"
				placeholder="Search robots..."
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;