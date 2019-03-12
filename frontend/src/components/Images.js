import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./Images.scss";

export default props =>
  props.images.map((image, i) => (
    <div key={i}>
      <div onClick={() => props.removeImage(image.public_id)}>
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />{" "}
        <img
          width="100"
          className={"imageAlign"}
          src={image.fileContents}
          alt=""
          onError={() => props.onError(image.public_id)}
        />
      </div>

      <div onClick={() => props.removeImage(image.public_id)}>
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />{" "}
        <img
          width="100"
          className={"imageAlign"}
          src={image.fileContents}
          alt=""
          onError={() => props.onError(image.public_id)}
        />
      </div>
    </div>
  ));
