import React, { useState } from "react";
//import { useHistory } from "react-router";

import { addPost } from "../../redux-store/actionCreators";
import store from "../../redux-store/store";

import "../styles/NewsAdder.css";

function useInputsValue(defaultValue = "") {
  const [titlevalue, setTitleValue] = useState(defaultValue);
  const [contentvalue, setContentValue] = useState(defaultValue);

  return {
    bindTitleInput: {
      titlevalue,
      onChange: (event) => setTitleValue(event.target.value),
    },
    bindContentInput: {
      contentvalue,
      onChange: (event) => setContentValue(event.target.value),
    },
    clearTitle: () => {
      setTitleValue("");
    },
    clearContent: () => {
      setContentValue("");
    },
    //??
    value: () => {
      return { titlevalue, contentvalue };
    },
  };
}

function NewsAdder(props) {
  //const history = useHistory();
  const inputs = useInputsValue("");

  store.subscribe(() => {
    const state = store.getState();
    console.log("STATE", state);
  });

  function SubmitHandler(event) {
    event.preventDefault();
    let values = inputs.value();
    if (values.titlevalue.trim() && values.contentvalue.trim()) {
      console.log("TRUE");
      store.dispatch(
        addPost({
          id: store.getState().posts.length + 1,
          title: values.titlevalue,
          content: values.contentvalue,
        })
      );
      //history.push("/");
      props.history.push("/");
    }
  }

  return (
    <form className="adder-form" onSubmit={SubmitHandler}>
      <input
        {...inputs.bindTitleInput}
        type="text"
        placeholder="post title"
        required
      />
      <textarea
        {...inputs.bindContentInput}
        rows="4"
        cols="50"
        placeholder="post content..."
      ></textarea>

      <button className="submitBtn" type="submit">
        Add post
      </button>
    </form>
  );
}

export default NewsAdder;
