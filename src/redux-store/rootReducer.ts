import { ADD_POST, DELETE_POST, LOAD_POSTS } from "./actionTypes";
// import ActionType from "./actionTypes"
import {Action, Post, State} from './types'

let initialState: State = {
  posts: []
};

// export function rootReducer(state: object = initialState, action) {
  export function rootReducer(state = initialState, action: Action) {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      let post  = action.payload;
      if (!(post.title.trim() && post.content.trim())) {
        throw new Error("EMPTY POST ERROR");
      }
      return { ...state, posts: [...state.posts, post] };
    case DELETE_POST:
      let deletedPost_id = action.payload;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== deletedPost_id),
      };
    default:
      return state;
  }
}
