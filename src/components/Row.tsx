import React from "react";
import "../styles/Row.css";

interface Props {
  children?: any;
}

const Row: React.FC<Props> = (props: Props) => {
  return <div className="row">{props.children}</div>;
};

export default Row;
