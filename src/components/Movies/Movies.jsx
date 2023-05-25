import { useEffect, useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../../state/actions";

const Movies = () => {
  const { data, loading, error } = useSelector((state) => state.films);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  if (loading) {
    return <>LOADINg....</>;
  }
  if (error) {
    return <>{error}</>;
  }

  return (
    <ul className="movies">
      {data?.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
