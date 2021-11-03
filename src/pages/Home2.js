// import { useCallback, useEffect, useRef, useState } from "react";
import { useEffect, useState } from "react";
// import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emptyMovie,
  getMovieList,
  moreMoview
} from "../redux/actions/movieList.actions";

import Layout from "../components/layout";
// import Searchbar from "../components/SearchBar";
import CardMovies from "../components/CardMovies";

function Home() {
  const dispatch = useDispatch();
  // const anchor = useRef(null);

  const { movies, loading } = useSelector((state) => state.moviesReducers);
  const [titleMovie, setTitleMovie] = useState("");
  // const [getData, setGetData] = useState(false);

  // const [fetchAllPerPage, setFetchAllPerPage] = useState(5);
  const [pagePerTitle, setPagePerTitle] = useState(1);

  // const observer = useRef();
  // const lastMovieRef = useCallback(
  //   (node) => {
  //     console.log("LastElement", node);
  //     console.log("Ref", observer);

  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();

  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && getData) {
  //         setPagePerTitle((prev) => prev + 1);
  //         setGetData(false);
  //       } else if (entries[0].isIntersecting && !getData) {
  //         dispatch(moreMoview());
  //         setGetData(true);
  //       }
  //     });

  //     if (node) observer.current.observe(node);
  //   }
  // );

  console.log("movieList dari reducers ke home", movies);
  console.log("Title Movie yg dicari: ", titleMovie);
  // console.log("fetchAllPerPage: ", fetchAllPerPage);

  useEffect(() => {
    dispatch(getMovieList(titleMovie, pagePerTitle));

    window.addEventListener("scroll", () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (scrolled === scrollable) {
        // setFetchAllPerPage((prev) => prev + 5);
                  dispatch(moreMoview());

        setPagePerTitle((prev) => prev + 1);
      }
    });
  }, [dispatch, titleMovie, pagePerTitle]);

  const handleChange = (e) => {
    setTitleMovie(e.target.value);
    dispatch(emptyMovie());

    console.log("NEW SEARCH", titleMovie);
    // dispatch(getMovieList(titleMovie, pagePerTitle));
  };

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
              {movies

                // .slice(0, fetchAllPerPage)
                .map((movie, i) => {
                  if (movies.length === i + 1) {
                    return (
                      <CardMovies
                        // elementRef={lastMovieRef}
                        movie={movie}
                        key={i}
                        count={i + 1}
                      />
                    );
                  } else {
                    return <CardMovies movie={movie} key={i} count={i + 1} />;
                  }
                })
                }
              {loading && <h2>loading...</h2>}
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
