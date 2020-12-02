import React from "react";

import "../styles/ModalDelete.css";

export default function Modal({ showModal, handleResponse, children }) {
  //const [isOpen, setOpen] = useState(setShow);
  //setOpen(true)

  return (
    <>
      {console.log("SHOWMODAL:", showModal)}
      {showModal && (
        <div className="modal">
          <div className="modal-body">
            <h2>Delete post</h2>
            <p>Are you sure ?</p>
            {/* {children} */}
            <button
              className="modalCancelBtn"
              onClick={() => {
                handleResponse(false);
                console.log("deletion declined");
              }}
            >
              No
            </button>
            <button
              className="modalRmBtn"
              onClick={() => {
                handleResponse(true);
                console.log("deleted");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </>
  );
}
