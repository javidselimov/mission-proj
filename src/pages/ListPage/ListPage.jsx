import { useEffect, } from "react";
import "./ListPage.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ListPage = () => {
  const { list } = useSelector(state => state.cart)
  const params = useParams()
  
  console.log(params.id)
  console.log("listpage", list)
  
  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {list.find(item=>item.listName===params.id).data.map((item) => {
          return (
            <li key={item.imdbID}>
              <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
