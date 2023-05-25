import { useState } from "react";
import "./SearchBox.css";
import { useDispatch } from "react-redux";
import { getFilms } from "../../state/actions";

const SearchBox = () => {
  const [state, setState] = useState({
    searchLine: "",
  });

  const dispatch = useDispatch();

  const searchLineChangeHandler = (e) => {
    setState({ ...state, searchLine: e.target.value });
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getFilms(state.searchLine));
  };

  const { searchLine } = state;

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
