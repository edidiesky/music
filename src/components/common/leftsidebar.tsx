import React from "react";
import Image from "next/image";
import { AiFillPushpin } from "react-icons/ai";
import styled from "styled-components";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { VscLibrary } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

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
  let user = true
  return (
    <LeftStyles className="w-100">
      <div className="w-90 content auto h-100 flex column gap-1">
        <div className="top flex column gap-2">
          <Link href='/' className="flex fs-16 text-extra-bold text-white item-center gap-2">
            <GoHomeFill fontSize={"24px"} />
            Home
          </Link>{" "}
          <Link href='/search' className="flex fs-16 text-extra-bold text-grey item-center gap-2">
            <FiSearch fontSize={"24px"} />
            Search
          </Link>
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
            {
              user ? <div className="h-100 w-90 auto flex column gap-2">
                <div className="w-100 flex column item-start gap-1">
                  <div className="tab fs-12 text-extra-bold text-white">Playlists</div>
                  <div className="flex w-100 item-center justify-space">
                    <div className="icons flex item-center justify-center">
                      <BiSearch fontSize={'20px'} />
                    </div>
                    <h4 className="fs-14 text-bold">Recently Added</h4>

                  </div>
                  <div className="w-100 flex column">
                    <div className="music_tab w-100 flex item-center gap-1">
                      <picture style={{ width: '5rem', height: "5rem" }}>
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          className="sm:w-9/12"
                          alt="Liked-Image"
                          width={0}
                          sizes="100vw"
                          height={0}
                          loading="lazy"
                          src='https://misc.scdn.co/liked-songs/liked-songs-64.png' />
                      </picture>
                      <h4 style={{ gap: "5px" }} className="fs-16 text-extra-bold flex column text-white">
                        Liked Songs
                        <span className="block flex item-center text-bold text-grey gap-1 fs-13">
                          <AiFillPushpin fontSize={'16px'} color={'var(--green)'} /> <span>Playlist</span> <span>.</span> <span>1 songs</span>
                        </span>
                      </h4>
                    </div>

                    <div className="music_tab w-100 flex item-center gap-1">
                      <picture style={{ width: '5rem', height: "5rem" }}>
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          className="sm:w-9/12"
                          alt="Liked-Image"
                          width={0}
                          sizes="100vw"
                          height={0}
                          loading="lazy"
                          src='https://misc.scdn.co/liked-songs/liked-songs-64.png' />
                      </picture>
                      <h4 style={{ gap: "5px" }} className="fs-16 text-extra-bold flex column text-white">
                        My Playlists #1
                        <span className="block flex item-center text-bold text-grey gap-1 fs-13">
                          <span>Playlist</span> <span>.</span> <span>Edidiong Essien</span>
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> : <div className="center_content w-100 flex column gap-2">
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
            }

          </div>

          {
            !user && <div className="bottom">
              <div className="w-85 auto flex column gap-4 justify-space">
                <div
                  style={{ gap: "1rem", width: "250px", fontSize: "12px" }}
                  className="flex w-90 flex-wrap item-center text-bold text-grey"
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
          }
        </div>
      </div>
    </LeftStyles>
  );
};

const LeftStyles = styled.div`
  width: 480px;
   position: sticky;
  height: 100%;
  top:0%;
  /* overflow: auto; */
  padding: 5px 0;
  @media (max-width: 780px) {
    display: none;
  }
  .content {
    height: 100%;
  }
  .center_top {
    padding: 0.7rem 0;
  }
  .music_tab {
    padding:1rem;
    border-radius:10px;

  &:hover {
      background-color: var(--grey-3);
    }
  }
  .icons {
    width:3.5rem !important;
    height:3.5rem !important;
    border-radius:50%;
    &:hover {
      background-color: var(--grey-3);
    }
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

   .tab {
    background-color: var(--grey-3);
    padding: 1rem 1.4rem;
    border-radius: 40px;
  }
  .center {
    height: 100%;
    position: relative;
    width: 100%;
    border-radius: 9px;
    padding: 1rem 0;
    background-color: var(--dark-3);
  }
`;

export default LeftSidebar;
