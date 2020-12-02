import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import FeedItem from "./FeedItem";
import { deletePost } from "../../redux-store/actionCreators";
import store from "../../redux-store/store";
import Modal from "../Modal/ModalDelete";
import Loader from "./Loader";

import "../styles/Feed.css";

function Feed(){
  const [loading, setLoading] = useState(true);
  const posts = useSelector((state) => state.posts);

  // *modal
  let [showModal, setShowModal] = useState(false);
  let [delElemID, setDelElemID] = useState(0);

  const handlePayload = (id) => {
    setDelElemID(id);
  };

  const handleModalOpen = () => {
    console.log("Modal Opened!");
    setShowModal(true);
  };

  const handleModalAction = (confirm) => {
    console.log("modal action invoked");
    if (confirm) store.dispatch(deletePost(delElemID));
    setShowModal(false);

    //todo: delete from redux
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  console.log("Modal_isOpen: ", showModal);

  return (
    <div className="feed">
      <Modal showModal={showModal} handleResponse={handleModalAction} />

      {
        loading ? (
          <Loader />
        ) : /*!showModal ?*/ posts.length ? (
          posts.map((post, index) => {
            return (
              <FeedItem
                post={post}
                key={index + "123sad"}
                index={index}
                callModal={handleModalOpen}
                setPayload={handlePayload}
              />
            );
          })
        ) : (
          <div className="emptyFeedContainer">No Posts!</div>
        ) /* : null */
      }
    </div>
  );
}

export default Feed;
