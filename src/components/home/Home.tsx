"use client"
import React from "react";
import styled from "styled-components";
import LeftSidebar from "../common/leftsidebar";
import Content from "./content/Content";
import MyAnimatePresence from "../utils/AnimatePresence";
import AccountModal from "../modals/AccountModal";

const HomeIndex: React.FC = () => {
  const [accountmodal, setAccountModal] = React.useState<boolean>(false)
  return (
    <HomeWrapperStyles className="w-100 flex column gap-1">

      <MyAnimatePresence
      >
        {accountmodal && <AccountModal modal={accountmodal} setModal={setAccountModal} />}
      </MyAnimatePresence>
      <HomeStyles className="w-100">
        <div className="home_wrapper w-100">
          <LeftSidebar />
          <div className="w-100">
            <div className="w-100">
              <Content modal={accountmodal} setModal={setAccountModal} />
            </div>
          </div>
        </div>
        {/* <LeftSidebar />
        <div className="w-100">
          <div className="w-100">
            <Content />
          </div>
        </div> */}
        {/* <LeftSidebar /> */}
      </HomeStyles>
     
    </HomeWrapperStyles>
  );
};

const HomeStyles = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
  align-items: flex-start;
  height: 100vh;
  /* background: red; */
  overflow: auto;
  /* height: 100vh; */
  .home_wrapper{
  /* overflow: hidden; */
    height:100%;
  /* overflow: auto; */
  display: flex;
  gap: 2px;
  align-items: flex-start;
  }
  @media (max-width: 780px) {
    flex-direction: column-reverse;
  }
`;

const HomeWrapperStyles = styled.div`
  height: 100vh;
  overflow: auto;
  /* overflow: hidden; */

  .auth_footer {
    background: linear-gradient(90deg, #af2896, #509bf5);
    padding: 1rem 0;
  }
`;
export default HomeIndex;
