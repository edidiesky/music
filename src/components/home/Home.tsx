"use client"
import React from "react";
import styled from "styled-components";
import LeftSidebar from "../common/leftsidebar";
import Content from "./content/Content";
import MyAnimatePresence from "../utils/AnimatePresence";
import AccountModal from "../modals/AccountModal";
import { Bottom } from "../common/Bottom";

const HomeIndex: React.FC = () => {
  const [accountmodal, setAccountModal] = React.useState<boolean>(false)
  return (
    <div className="w-100 flex column gap-1">

      <MyAnimatePresence
      >
        {accountmodal && <AccountModal modal={accountmodal} setModal={setAccountModal} />}
      </MyAnimatePresence>
      <HomeStyles className="w-100 flex column gap-2">
        <div className="home_wrapper flex w-100">
          <LeftSidebar />
          <div className="w-100">
            <div className="w-100 home_content">
              <Content modal={accountmodal} setModal={setAccountModal} />
            </div>
          </div>
        </div>
        <div className="w-100 bottomWrapper">
          <Bottom />
        </div>
      </HomeStyles>

    </div>
  );
};

const HomeStyles = styled.div`
    width: 100%;
    display:flex;
    gap:2px;
    height:100vh;
    overflow:hidden;
     .home_wrapper{
        height:auto;
        align-items: flex-start;
        @media (min-width:780px) {
        overflow: hidden;
        }
        .home_content{
            height:100%;
            overflow:auto;
             @media (max-width:780px) {
       min-height:100vh;
        }
        }
        @media (max-width:780px) {
        flex-direction: column-reverse;
        }
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
