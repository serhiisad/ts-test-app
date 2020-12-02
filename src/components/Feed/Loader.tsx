import React from "react";
import "../styles/Loader.css";

const style = {
  display: "flex",
  justifyContent: "center",
  margin: ".5rem",
};

function Loader(){
  return (
    <div style={style}>
      <div className="lds-dual-ring" />
    </div>
  );
}

export default Loader;
