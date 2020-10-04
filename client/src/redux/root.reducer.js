import { combineReducers } from "redux";

// user reducer
import userReducer from "./user/user.reducer";
import globalReducer from "./global/global.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});

export default rootReducer;
