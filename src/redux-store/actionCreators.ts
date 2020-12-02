import { Interface } from "readline";
import { ADD_POST, DELETE_POST, LOAD_POSTS} from "./actionTypes";
import {Action, Post} from './types'

export function addPost(post: Post): Action  {
  return {
    type: ADD_POST,
    payload: post,
  };
}

export function deletePost(id: number): Action {
  return {
    type: DELETE_POST,
    payload: id,
  };
}

export function loadPosts(all_posts: Array<Post>): Action {
  return {
    type: LOAD_POSTS,
    payload: all_posts,
  };
}
