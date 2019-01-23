import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
	<div className="saved-list">
		<h3>Saved Movies:</h3>
		{props.list.map((movie, i) => (
			<NavLink
				style={{ textDecoration: 'none' }}
				exact
				to={`/movies/${movie.id}`}
				key={i}>
				<span className="saved-movie">{movie.title}</span>
			</NavLink>
		))}
		<div>
			<Link className="home-button" to="/">
				Home
			</Link>
		</div>
	</div>
);

export default SavedList;
