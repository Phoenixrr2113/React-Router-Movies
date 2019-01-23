import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
	<div className="saved-list">
		<h3>Saved Movies:</h3>
		{props.list.map((movie, i) => (
			<span key={i} className="saved-movie">
				{movie.title}
			</span>
		))}
		<div>
			<Link className="home-button" to="/">
				Home
			</Link>
		</div>
	</div>
);

export default SavedList;
