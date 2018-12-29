import React from "react";

const valComp = props => {
  const opText = props.text.length >= 5 ? "Text long enough" : "Text too short";
  return <p>{opText}</p>;
};

export default valComp;
