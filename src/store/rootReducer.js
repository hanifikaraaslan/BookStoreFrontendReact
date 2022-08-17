import { combineReducers } from "redux";
import settingReducer from "./reducers/settingReducer";
import categoryReducer from "./reducers/categoryReducer";
import bookReducer from "./reducers/bookReducer";
import authorReducer from "./reducers/authorReducer";
import authReducer from "./reducers/authReducer";
import registerReducer from "./reducers/registerReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    setting: settingReducer,
    category : categoryReducer,
    book : bookReducer,
    author : authorReducer,
    auth : authReducer,
    register:registerReducer,
    cart :cartReducer
});

export default rootReducer;