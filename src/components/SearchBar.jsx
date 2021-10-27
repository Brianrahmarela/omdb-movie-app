// import { Link } from 'react-router-dom';
// import { useEffect, } from "react";
// import { useDispatch } from "react-redux";
// import { getMovieList } from "../redux/actions/movieList.actions";

const Searchbar = ({ titleMovie, setTitleMovie, pagePerTitle }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
	// 	dispatch(getMovieList(titleMovie, pagePerTitle));
	// }, [dispatch, setTitleMovie]);

  return (
    <div data-testid="searchBar">
      <input 
        className="tw-border tw-border-green-400 tw-rounded-xl tw-w-full tw-py-2 tw-px-4 tw-focus:outline-none tw-text-green-500"
        value={titleMovie}
        onChange={(e) => setTitleMovie(e.target.value)}
        placeholder="Search"
      />
      <div>
        {/* Komponen setelah && dikanan hanya dirender jika kondisi titleMovie.length !== 0  di sebelah kiri bernilai benar.*/}
        
      </div>
    </div>
  )
}

export default Searchbar
