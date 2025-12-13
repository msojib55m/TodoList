import { combineReducers,createStore } from "redux";
import { counterReducer } from "./counter";

const combineStores = combineReducers({
    counter:counterReducer,
}) ;
const store = createStore(combineStores);

export default store;

export type RootState = ReturnType<typeof combineStores>