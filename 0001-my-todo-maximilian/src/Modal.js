import React from "react";

export default function Modal({}) {
function cancelHandler(){}

function confirmHandler(){}


  return (
    <div className="modal">
      <p>Are You Sure?!</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}
