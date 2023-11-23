import React from "react";
import { Button } from "@/styles/button.styles";

type MyComponentProps = {
  ButtonText: string;
  onClick: () => void;
};

const SingleButton: React.FC<MyComponentProps> = ({ ButtonText, onClick }) => {
  return <Button onClick={onClick}>{ButtonText}</Button>;
};

export default SingleButton;
