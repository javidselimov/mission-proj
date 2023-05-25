const initialState = {
  data: null,
  loading: false,
  error: null,
};
export const filmReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
