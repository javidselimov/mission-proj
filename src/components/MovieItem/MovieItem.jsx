import { useDispatch, useSelector } from 'react-redux';
import './MovieItem.css';
import { addToCart } from '../../state/actions/cartActions';

const MovieItem=(props)=> {
 
    const {data} = useSelector(state=>state.cart)
    const { Title, Year, imdbID, Type, Poster } = props



    const dispatch = useDispatch()
    const addTo = () => {
       let a =  data.find(item => {
               return item.imdbID===imdbID
       })
        if (!a) {
             dispatch(addToCart(props))
        }else alert("Artiq elave edilib")
           
        }
      
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" onClick={addTo} className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
   
}
 
export default MovieItem;