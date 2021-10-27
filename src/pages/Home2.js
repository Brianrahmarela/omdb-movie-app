import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "../redux/actions/movieList.actions";

import Layout from "../components/layout";
import Searchbar from "../components/SearchBar";
import CardMovies from "../components/CardMovies";

function Home() {
	const dispatch = useDispatch();
	const anchor = useRef(null);

	const movieList = useSelector((state) => state.moviesReducers.movies);
	const [titleMovie, setTitleMovie] = useState("");
	const [fetchAllPerPage, setFetchAllPerPage] = useState(5);
	const [pagePerTitle, setPagePerTitle] = useState(1);

	console.log("movieList dari reducers ke home", movieList);
	console.log("Title Movie yg dicari: ", titleMovie);
	console.log("fetchAllPerPage: ", fetchAllPerPage);

	useEffect(() => {
		dispatch(getMovieList(titleMovie, pagePerTitle));

		window.addEventListener("scroll", () => {
			const scrollable =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY;
			if (scrolled === scrollable) {
        setFetchAllPerPage((prev) => prev + 5);
				setPagePerTitle((prev) => prev + 1);
			}
		});
	}, [dispatch, titleMovie, pagePerTitle]);

	const handleChange = (e) => {
		setTitleMovie(e.target.value);
		console.log('NEW SEARCH', titleMovie);
		// dispatch(getMovieList(titleMovie, pagePerTitle));

	}

	return (
		<>
			<Layout>
				<main className="tw-py-16 tw-px-4">
				<div data-testid="searchBar">
      <input 
        className="tw-border tw-border-green-400 tw-rounded-xl tw-w-full tw-py-2 tw-px-4 tw-focus:outline-none tw-text-green-500"
        value={titleMovie}
        onChange={handleChange}
				// onChange={(e) => setTitleMovie(e.target.value)}
        placeholder="Search"
      />
      <div>
        {/* Komponen setelah && dikanan hanya dirender jika kondisi titleMovie.length !== 0  di sebelah kiri bernilai benar.*/}
        
      </div>
    </div>
					{/* <Searchbar
						titleMovie={titleMovie}
						setTitleMovie={setTitleMovie}
						movieList={movieList}
						pagePerTitle={pagePerTitle}
					/> */}
					{titleMovie.length === 0 ? (
						<h1 className="text-center font-bold text-2xl my-40 h-screen">
							You need to search first
						</h1>
					) : (
						<div className="tw-grid tw-grid-cols-3 tw-gap-20 tw-mt-20">
							{movieList
                
								.slice(0, fetchAllPerPage)
								.map((movie, i) => (
                  console.log('movie render after map',movie),
									<CardMovies movie={movie} key={i} />
								))
                }
							{/* <div ref={anchor} /> */}
						</div>
					)}
				</main>
			</Layout>
		</>
		// <Container>
		// <div style={{marginTop: 80}}>
		//   <h1>Hal Home 2</h1>
		// </div>
		// </Container>
	);
}

export default Home;
