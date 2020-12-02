import configureMockStore from "redux-mock-store";
import * as actions from "../redux-store/actionCreators";
import * as types from "../redux-store/actionTypes";
import { rootReducer } from "../redux-store/rootReducer";

const middlewares = [];
const mockStore = configureMockStore(middlewares);

const some_json = require("../db/news.json");

describe("root_reducer", () => {
  it("should load initial posts {LOAD_POSTS}", () => {
    expect(
      rootReducer({ posts: [] }, { type: types.LOAD_POSTS, payload: some_json })
    ).toEqual({
      posts: some_json,
    });
  });

  it("should handle ADD_POST", () => {
    expect(
      rootReducer(
        { posts: [] },
        {
          type: types.ADD_POST,
          payload: { id: 4, title: "qw", content: "qw" },
        }
      )
    ).toEqual({ posts: [{ id: 4, title: "qw", content: "qw" }] });

    expect(() => {
      rootReducer(
        { posts: [] },
        {
          type: types.ADD_POST,
          payload: { id: 6, title: "", content: "" },
        }
      );
    }).toThrow();
  });

  it("should handle DELETE_POST", () => {
    expect(
      rootReducer(
        {
          posts: [{ id: 1, title: "a", content: "b" }],
        },
        {
          type: types.DELETE_POST,
          payload: 1,
        }
      )
    ).toEqual({ posts: [] });
  });
});
