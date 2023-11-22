import React from "react";
import { Button } from "@/styles/button.styles";

type MyComponentProps = {
  text: string;
  onClick: () => void;
};

const SingleButton: React.FC<MyComponentProps> = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default SingleButton;
