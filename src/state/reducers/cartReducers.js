
const initialState = {
    data: [],
    list: []
}
export const cartReducers = (state=initialState,action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          data: state.data.filter((item) => item.imdbID != action.payload),
        };
        case "ADD_TO_MY_LIST":
          
        return {
          ...state,
          list: [...state.list,action.payload],
            };
        case "REMOVE_ALL_FROM_CART":
            return {
                ...state,
                data:[]
            }
        case "REMOVE_LIST_ITEM":
            return {
                ...state,list:state.list.filter(item=>item.listName!=action.payload)
            }
      default:
        return state;
    }
}