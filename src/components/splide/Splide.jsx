import React, { useEffect, useRef } from 'react';
import { Splide as ReactSplide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../state/actions';
import Movies from '../Movies/Movies';
import './Splide.css'

const SplideSlider = () => {
  const splideRef = useRef(null);
  const { data, loading, error } = useSelector((state) => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  useEffect(() => {
    const splideInstance = splideRef.current.splide;

    if (splideInstance) {
      splideInstance.on('mounted', () => {
        splideInstance.mount();
      });
    }
  }, []);

  return (
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        interval: 3000,
      }}
      ref={splideRef}
    >
      {data?.map((movie) => (
        <Splide key={movie.imdbID}>
          <img className='poster-image' src={movie.Poster} alt={movie.title} />
        </Splide>
      ))}
    </Splide>
  );
};

export default SplideSlider;











