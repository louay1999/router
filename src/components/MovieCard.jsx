import React from 'react'
import "./MovieCard.css"
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
	const{Title,Plot,imdbRating,Images,id}=props.movie
  return (
    <div className="hero-container">
		
		<div className="main-container">
			<div className="poster-container">
				<Link to={`/trailer/${id}`}><img src={Images[0]} className="poster" /></Link>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">{Title}</h4>
					<p className="ticket__movie-slogan">{Plot}</p>
					<p className="ticket__current-price">{imdbRating}</p>
					
					
				</div>
			</div>
		</div>
	</div>
  )
}
