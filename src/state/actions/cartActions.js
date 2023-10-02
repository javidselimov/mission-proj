


export const addToCart = (data) => {
    return {
        type: "ADD_TO_CART",
        payload:data
    }
}

export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload:id
    }
}

export const removeAllFromCart = () => {
  return {
    type: "REMOVE_ALL_FROM_CART",
  };
};
export const removeListItem = (id) => {
  return {
      type: "REMOVE_LIST_ITEM",
      payload:id
  };
};

export const addToMyList = (data) => {
    return {
        type: "ADD_TO_MY_LIST",
        payload:data
    }
}