import React from "react";
import {useDispatch, useSelector} from 'react-redux';
// import { connect } from "react-redux";
// import { getData } from "../redux/actions/getData";
import { postSearch } from "../redux/actions/searchData";
import { postIDMovie } from "../redux/actions/idMovie";
import { useHistory } from "react-router-dom";

import { Button, Card, Form, Row, Col } from "react-bootstrap";

function ListDataMovies() {
	const history = useHistory();

  const ListMovie = useSelector((state) => state.getData.data[0]);
	console.log('hasil pencarian reducers', ListMovie);

  const dispatch = useDispatch();

	// console.log("Props dari mstp ke komponen", props); 
	// useEffect(() => {
  //   dispatch((postSearch()));
	// }, [dispatch]);

	const handleSearch = (e) => {
		e.preventDefault();
    console.log('search inputan user: ', e.target.searchbtn.value);
		dispatch(postSearch(e.target.searchbtn.value))
		e.target.searchbtn.value = "";
	};
	const GetIDMovie = (e, item) => {
		// console.log('events GetIDMovie', e),
		console.log('item GetIDMovie', item)
		e.preventDefault();
    console.log('id movie yg di klik: ', item);
		dispatch(postIDMovie(item))
		history.push('/detail-movie');
		item = "";
	};

	return (
		<div>
			<Form onSubmit={handleSearch} style={{ marginTop: 20, marginBottom: 60 }}>
				<Form.Group>
					<Row>
						<Col>
							<Form.Control
								name="searchbtn"
								type="text"
								placeholder="search movie..."
							/>
						</Col>
						<Col>
							<Button variant="primary" type="submit">
								Search
							</Button>
						</Col>
					</Row>
				</Form.Group>
			</Form>
			<h5 style={{marginBottom: 20}}>list Data Movie</h5>

			<Row>
			{
				ListMovie !== undefined ? (
					ListMovie.map((item, idx) => (
							<Col key={idx}>						
								<Card style={{ width: "18rem", marginBottom: 25 }} >
									<Card.Img variant="top" src={item.Poster} />
									<Card.Body>
										<Card.Title>{item.Title}</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make
											up the bulk of the card's content.
										</Card.Text>
										<Button variant="primary" onClick={(e) => GetIDMovie(e, item.imdbID)}>Detail Movie</Button>
									</Card.Body>
								</Card>
							</Col>
					))					
				) : (
					<h3>No Movie Found</h3>
				)
			}
			</Row>
		</div>
	);
}
// const mapStateToProps = (props) => {
// 	console.log("mstp listData", props);
// 	return {
// 		data: props.getData.data,
// 	};
// };
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getData: () => dispatch(getData()),
// 	};
// };
export default ListDataMovies;
// export default connect(mapStateToProps, mapDispatchToProps)(ListDataMovies);
