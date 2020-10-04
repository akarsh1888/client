const INITIAL_STATE = {
  error: null,
  notify: null,
};

export default (state = INITIAL_STATE, action) => {
  // to manage this state, we r listening for every actions
  const { error } = action;
  if (error) {
    return {
      ...state,
      error: error,
    };
  } else if (action.type === "CLEAR_ERROR") {
    return {
      ...state,
      error: null,
    };
  } else if (action.type === "NOTIFY") {
    return {
      ...state,
      notify: action.payload,
    };
  }

  return state;
};
