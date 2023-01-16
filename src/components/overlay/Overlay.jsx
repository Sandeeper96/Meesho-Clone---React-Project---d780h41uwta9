import React from "react";
import "./Overlay.css";

export default function Overlay(props) {
  const CloseButton = () => {
    props.OverStatus();
  };
  return (
    <div className="overlay">
      <div className="lay-data">
        {props.children}
        <button className="close" onClick={CloseButton}>
          Close
        </button>
      </div>
    </div>
  );
}
