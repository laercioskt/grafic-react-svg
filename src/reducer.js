const appReducer = (state = {functionToRender: "x*(x/50)"}, action) => {
  switch (action.type) {
    case "CHANGE_FUNCTION":
      return {functionToRender: action.data};
    default:
      return state;
  }
};

export default appReducer;
