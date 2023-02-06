import React from "react";
import Error404image from "../images/404Error.gif";

function Error404() {
  return (
    <div>
      <img
        style={{ width: "100%", height: "49.1rem !important" }}
        src={Error404image}
        alt="ErrorPage"
      />
    </div>
  );
}

export default Error404;
