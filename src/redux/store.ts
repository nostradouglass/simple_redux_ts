import { combineReducers, createStore } from "redux";
import countReducer from './ducks/counter'

const reducer = combineReducers({
    counter: countReducer

})

const store = createStore(reducer);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch