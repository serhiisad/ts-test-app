import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as actions from "../redux-store/actionCreators";
import * as types from "../redux-store/actionTypes";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  const store = mockStore({ posts: [] });

  it("{addPost} should create ADD_POST action", () => {
    const post = { id: 1, title: "title", content: "content" };
    const expectedAction = {
      type: types.ADD_POST,
      payload: post,
    };
    // console.log("DONE: ", done);

    store.dispatch(actions.addPost(post));
    expect(store.getActions()[0]).toEqual(expectedAction);

    // expect(store.dispatch(actions.addPost(post))).toEqual(expectedAction); //??
  }, 3000);

  it("{loadPosts} should create LOAD_POSTS action", () => {
    const posts = [
      { id: 2, title: "title2", content: "content2" },
      { id: 3, title: "title3", content: "content3" },
    ];

    const expectedAction = {
      type: types.LOAD_POSTS,
      payload: posts,
    };

    expect(actions.loadPosts(posts)).toEqual(expectedAction);
  });

  it("{deletePosts} should create DELETE_POSTS action", (done) => {
    const id = 1;
    const expectedAction = {
      type: types.DELETE_POST,
      payload: id,
    };

    expect(actions.deletePost(id)).toEqual(expectedAction);
    done();
  });
});
