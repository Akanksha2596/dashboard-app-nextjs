import { ReactElement } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileHeader = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  console.log(router.route, "route");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          padding: "20px 33px",
        }}
      >
        <Link
          href="/"
          style={{ marginLeft: "20px", width: "16.596px", height: "16.596px" }}
        >
          <SlArrowLeft />
        </Link>
        {router.route === "/topProducts" ? (
          <h3
            style={{
              fontSize: "18.67px",
              fontWeight: "bold",
            }}
          >
            Top Products
          </h3>
        ) : router.route === "/topPosts" ? (
          <h3
            style={{
              fontSize: "18.67px",
              fontWeight: "bold",
            }}
          >
            Top Posts
          </h3>
        ) : router.route === "/topStores" ? (
          <h3
            style={{
              fontSize: "18.67px",
              fontWeight: "bold",
            }}
          >
            Top Stores
          </h3>
        ) : (
          <h3
            style={{
              fontSize: "18.67px",
              fontWeight: "bold",
            }}
          >
            My Dashboard
          </h3>
        )}

        <Link
          style={{
            marginRight: "20px",
            width: "16.596px",
            height: "16.596px",
          }}
          href="/"
        >
          <IoMdClose />
        </Link>
      </div>
      {children}
    </>
  );
};

export default MobileHeader;
