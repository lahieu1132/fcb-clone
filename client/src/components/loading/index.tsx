import React from "react";
import "./Loading.scss";

function Loading() {
  return (
    <div
      className='fixed top-0 left-0 right-0 bottom-0 '
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        userSelect: "none",
      }}
    >
      <div className='cssload-container'>
        <ul className='cssload-flex-container'>
          <li>
            <span className='cssload-loading cssload-one'></span>
            <span className='cssload-loading cssload-two'></span>
            <span className='cssload-loading-center'></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Loading;
