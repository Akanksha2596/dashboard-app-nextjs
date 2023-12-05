import { ReactElement } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import { NavDiv, ArrowIcon,Title, CrossIcon } from "@/styles/mobilenav.styles";

const MobileHeader = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  console.log(router.route, "route");

  return (
    <>
      <NavDiv>
        <ArrowIcon href="/">
          <SlArrowLeft />
        </ArrowIcon>
        {router.route === "/topProducts" ? (
          <Title>Top Products</Title>
        ) : router.route === "/topPosts" ? (
          <Title>Top Posts</Title>
        ) : router.route === "/topStores" ? (
          <Title>Top Stores</Title>
        ) : (
          <Title>My Dashboard</Title>
        )}
        <CrossIcon href="/">
          <IoMdClose />
        </CrossIcon>
      </NavDiv>
      {children}
    </>
  );
};

export default MobileHeader;
