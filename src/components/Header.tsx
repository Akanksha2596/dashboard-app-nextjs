// import { HeadingContainer, HeadingText } from "@/styles/card.styles";
import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <Link href="/">
        <SlArrowLeft />
      </Link>
      <h1>Top Products</h1>
      <Link href="/">
        <IoMdClose />
      </Link>
    </div>
  );
};

export default Header;
