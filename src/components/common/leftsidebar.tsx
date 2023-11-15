import React from "react";
import styled from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { VscLibrary } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";

const options = [
  "Legacy",
  "Privacy",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Accessibility",
  "Cookies",
];

const LeftSidebar: React.FC = () => {
  return (
    <LeftStyles className="w-100">
      <div className="w-90 content auto h-100 flex column gap-1">
        <div className="top flex column gap-2">
          <div className="flex fs-16 text-extra-bold text-white item-center gap-2">
            <GoHomeFill fontSize={"24px"} />
            Home
          </div>{" "}
          <div className="flex fs-16 text-extra-bold text-grey item-center gap-2">
            <FiSearch fontSize={"24px"} />
            Search
          </div>
        </div>

        <div className="center w-100">
          <div className="center_top w-85 auto flex item-center gap-2 justify-space fs-16 text-extra-bold text-grey">
            <div className="flex item-center gap-2">
              <VscLibrary fontSize={"24px"} />
              Your Library
            </div>
            <div className="icons flex item-center justify-center">
              <FiPlus fontSize={"20px"} />
            </div>
          </div>
          <div className="flex center_wrapper column gap-1">
            <div className="center_content w-100 flex column gap-2">
              <h3 className="fs-16 text-white text-extra-bold">
                Create your first playlist
                <span
                  style={{ padding: "1.4rem 0" }}
                  className="block text-bold fs-14 py-1"
                >
                  It's easy, we'll help you
                </span>
              </h3>
              <div className="w-100 flex item-center">
                <div className="btn btn-3 fs-12 text-dark text-extra-bold">
                  Create playlist
                </div>
              </div>
            </div>
            <div className="center_content w-100 flex column gap-2">
              <h3 className="fs-16 text-white text-extra-bold">
                Let's find some podcast to follow
                <span
                  style={{ padding: "1.4rem 0" }}
                  className="block text-light fs-12 py-1"
                >
                  We'll keep you updated on new episodes
                </span>
              </h3>
              <div className="w-100 flex item-center">
                <div className="btn btn-3 fs-12 text-dark text-extra-bold">
                  Create playlist
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="w-85 auto flex column gap-4 justify-space">
              <div
                style={{ gap: "2rem", width:"250px" }}
                className="flex w-90 flex-wrap item-center fs-10 text-bold text-grey"
              >
                {options.map((x, index) => {
                  return <div className="">{x}</div>;
                })}
              </div>
              <div className="w-100 flex item-center">
                <div
                  style={{ gap: ".5rem" }}
                  className="btn btn-2 fs-14 text-extra-bold text-white flex item-center"
                >
                  <TbWorld fontSize={"20px"} />
                  English
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LeftStyles>
  );
};

const LeftStyles = styled.div`
  width: 420px;
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 5px 0;
  @media (max-width: 780px) {
    display: none;
  }
  .content {
    min-height: 100%;
  }
  .center_top {
    padding: 0.7rem 0;
  }
  .center_wrapper {
  }
  .center_content {
    padding: 1.2rem 3rem;
    width: 90%;
    margin: 0 auto;
    border-radius: 12px;
    background-color: var(--grey-3);
  }
  .bottom {
    background-color: rgb(18, 18, 18);
    padding: 3rem 0;
    /* border-radius:7px; */
    width: 100%;
    border-radius: inherit;
  }
  .top {
    background-color: var(--dark-2);
    padding: 2rem 3rem;
    border-radius: 9px;
    width: 100%;
  }
  .center {
    height: 80%;
    position: relative;
    width: 100%;
    border-radius: 9px;
    padding: 1rem 0;
    background-color: var(--dark-3);
  }
`;

export default LeftSidebar;
