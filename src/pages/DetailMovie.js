import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Container } from "react-bootstrap";

function DetailMovie() {
	const ListIDMovie = useSelector((state) => state.getData.data);
	console.log("hasil pencarian ListIDMovie reducers", ListIDMovie);

	return (
		<Container>
			<div style={{ marginTop: 20, marginBottom: 60 }}>
				<h1>Hal DetailMovie</h1>
				{
					<>
						<img src={ListIDMovie.Poster} alt="imgdetail" style={{ marginTop: 20, marginBottom: 40 }}></img>
						<ListGroup>
							<ListGroup.Item>{ListIDMovie.Actors}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Awards}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.BoxOffice}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Country}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Director}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Genre}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Rated}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Released}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Writer}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.Year}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.imdbRating}</ListGroup.Item>
							<ListGroup.Item>{ListIDMovie.imdbVotes}</ListGroup.Item>
						</ListGroup>
					</>
				}
			</div>
		</Container>
	);
}

export default DetailMovie;
