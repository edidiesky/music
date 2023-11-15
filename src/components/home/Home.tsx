import React from "react";
import styled from "styled-components";
import LeftSidebar from "../common/leftsidebar";
import Content from "./content/Content";

const HomeIndex: React.FC = () => {
  return (
    <HomeWrapperStyles className="w-100 flex column gap-1">
      <HomeStyles className="w-100">
        <LeftSidebar />
        <div className="w-100">
          <div className="w-100">
            <Content />
          </div>
        </div>
        {/* <LeftSidebar /> */}
      </HomeStyles>
      <div className="w-100">
        <div className="w-100 auth_footer flex item-center">
          <div className="w-90 auto flex item-center justify-space">
            <h4 className="fs-15 w-100 text-light text-white">
              <span className="block uppercase fs-14">PREVIEW OF SPOTIFY</span>
              <span className="text-bold py-1">
                Sign up to get unlimited songs and podcast width occasional ads.
                No credit card needed
              </span>
            </h4>
            <div className="flex w-100 item-center gap-1 justify-end">
              <div className="btn fs-14 text-dark text-extra-bold">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapperStyles>
  );
};

const HomeStyles = styled.div`
  width: 100%;
  display: flex;
  gap: 2px;
  align-items: flex-start;
 
  @media (min-width: 780px) {
    height: 100vh;
    overflow: auto;
  }
  @media (max-width: 780px) {
    flex-direction: column-reverse;
  }
`;

const HomeWrapperStyles = styled.div`
  height: 100vh;
  overflow: auto;

  .auth_footer {
    background: linear-gradient(90deg, #af2896, #509bf5);
    padding: 1rem 0;
  }
`;
export default HomeIndex;
