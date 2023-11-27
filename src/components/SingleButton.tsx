import React from "react";
import { Button } from "@/styles/button.styles";

type MyComponentProps = {
  text: string;
  onClick: () => void;
};

const SingleButton: React.FC<MyComponentProps> = (props) => {
  return <Button onClick={props.onClick}>{props.text}</Button>;
};

export default SingleButton;
