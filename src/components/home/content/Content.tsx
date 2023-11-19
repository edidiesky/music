import PlayIcon from "@/assets/svg/play";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const data = [
  {
    image: "https://i.scdn.co/image/ab67706f00000002d6d48b11fd3b11da654c3519",
    text: "Deep Focus",
    subtext: "Keep calm and docus with ambient and post-rock music",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79",
    text: "Peaceful Piano",
    subtext: "Peaceful Piano to help you breathe and slow down",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c",
    text: "Instrumental Study",
    subtext: "Focus with soft study music",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc",
    text: "Focus flow",
    subtext: "Uptempo hippop beats",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618",
    text: "Workday Lounge",
    subtext: "Lounge and chill out music for your day",
  },

  {
    image: "https://i.scdn.co/image/ab67706f00000002abc47d0e6b0ef634816633d6",
    text: "Today top Hits",
    subtext: "Billie Ellish is on top of the charts of the top 50",
  },
  {
    image: "https://i.scdn.co/image/ab67706f000000025addec7662cf3ec3d4519d76",
    text: "Reap Caviar",
    subtext: "New Music form Lil Tjay, Quavo and Jt",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
    text: "All Out 2010s",
    subtext: "The biggest sons of the 2010s.",
  },
  {
    image: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
    text: "Rock Classics",
    subtext: "Rock Legends & epic songs that continue to inspire",
  },
  {
    image: "https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618",
    text: "Chill Hits",
    subtext: "Kick back to best new and recebt chill hits",
  },
];
type modalType = {
  modal: boolean;
  id?: string;
  setModal: (val: boolean) => void;
}
const Content: React.FC<modalType> = ({ modal, setModal, id }) => {
  return (
    <ContentStyles className="w-100 flex column gap-2">
      <div className="contentwrapper w-100">
        <div className="content_top w-100">
          <div className="w-90 auto flex item-center justify-space">
            <div className="flex item-center gap-1">
              <div className="icons flex item-center justify-center">
                <FiChevronLeft fontSize={"20px"} />
              </div>
              <div className="icons flex item-center justify-center">
                <FiChevronRight fontSize={"20px"} />
              </div>
            </div>
            <div className="flex item-center gap-1 justify-end">
              <div className="btn fs-14 text-dark text-extra-bold">Sign Up</div>
            </div>
          </div>
        </div>
        {/* <div className="flex w-100 column gap-2">
          <div className="content_center flex column gap-2">
            <div className="w-90 auto py-2 flex column gap-2">
              <h3 className="fs-24 text-extra-bold">Focus</h3>
              <div className="w-100 grid grid_wrapper">
                {data.slice(0, 5).map((x, index) => {
                  return (
                    <div
                      key={index}
                      className="content_card w-100 relative flex column gap-2"
                    >
                      <div className="content_image_wrapper">
                        <img src={x?.image} alt="" className="w-100 h-100" />
                        <div className="playicon flex item-center justify-center">
                          <BsFillPlayFill
                            fontSize={"24px"}
                            color="var(--dark-1)"
                          />
                        </div>
                      </div>
                      <h4
                        style={{ fontSize: "14px" }}
                        className="w-100 text-extra-bold"
                      >
                        {x.text}
                        <span
                          style={{ fontSize: "13px", marginTop: "7px" }}
                          className="block subtext text-bold text-grey"
                        >
                          {x.subtext.substring(0, 34)}...
                        </span>
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex w-100 column gap-2">
          <div className="content_center flex column gap-2">
            <div className="w-90 auto py-2 flex column gap-2">
              <h3 className="fs-24 text-extra-bold">Spotify Playlists</h3>
              <div className="w-100 grid grid_wrapper">
                {data.slice(5, 11).map((x, index) => {
                  return (
                    <div
                      key={index}
                      className="content_card w-100 relative flex column gap-2"
                    >
                      <div className="content_image_wrapper">
                        <div onClick={() => setModal(true)} className="playicon flex item-center justify-center">
                          <BsFillPlayFill
                            fontSize={"24px"}
                            color="var(--dark-1)"
                          />
                        </div>
                        <img src={x?.image} alt="" className="w-100 h-100" />
                      </div>
                      <h4
                        style={{ fontSize: "14px" }}
                        className="w-100 text-extra-bold"
                      >
                        {x.text}
                        <span
                          style={{ fontSize: "13px", marginTop:"7px"}}
                          className="block subtext text-bold text-grey"
                        >
                          {x.subtext.substring(0, 34)}...
                        </span>
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "var(--dark-2)" }} className="w-100 ">
          <div className="w-90 auto footer_wrapper">
            <div className="flex column gap-2">
              <h4 className="fs-14 text-extra-bold">Communities</h4>
              <ul className="flex column gap-1 text-grey text-bold fs-14">
                <li>About</li>
                <li>Jobs</li>
                <li>For the record</li>
              </ul>
            </div>
            <div className="flex column gap-2">
              <h4 className="fs-14 text-extra-bold">Company</h4>
              <ul className="flex column gap-1 text-grey text-bold fs-14">
                <li>For Artists</li>
                <li>For Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
              </ul>
            </div>
            <div className="flex column gap-2">
              <h4 className="fs-14 text-extra-bold">Useful Links</h4>
              <ul className="flex column gap-1 text-grey text-bold fs-14">
                <li>Support</li>
                <li>Free Mobile App</li>
              </ul>
            </div>
            <div className="flex item-start justify-end gap-2">
              <div className="icons icon2 flex item-center justify-center">
                <FaInstagram fontSize={"20px"} />
              </div>
              <div className="icons icon2 flex item-center justify-center">
                <FaTwitter fontSize={"20px"} />
              </div>
              <div className="icons icon2 flex item-center justify-center">
                <FaFacebook fontSize={"20px"} />
              </div>
            </div>
          </div>
          <div className="w-90 auto fs-14 text-grey text-light">
            @2023 Spotify EddyCodeVerse
          </div>
        </div>
      </div>
    </ContentStyles>
  );
};

const ContentStyles = styled.div`
  width: 99%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 0.5rem 0;
  .subtext {
    width: 100%;
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  }
  .icons {
    background-color: var(--dark-2) !important;
  }
  .icons.icon2 {
    background-color: var(--grey-3) !important;
  }
  .content_card {
    padding: 1.3rem 1.5rem;
    background-color: var(--dark-grey);
    transition: all 0.4s ease;
    border-radius: 6px;
    &:hover {
      background-color: #282828;
      .content_image_wrapper {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        /* transform: translateY(-3px); */
        .playicon {
          opacity: 1;
          visibility: visible;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
          bottom: 4%;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }

    .content_image_wrapper {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
      .playicon {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        position: absolute;
        bottom: -10%;
        border-radius: 50%;
        right: 4%;
        width: 4.5rem;
        height: 4.5rem;
        background: var(--green);
        opacity: 0;
        transition: all 0.3s;
        visibility: hidden;
        z-index: 30;
        cursor: pointer;
      }
      img {
        border-radius: inherit;
      }
    }
  }
  .grid_wrapper {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 2rem;
  }
  .content_top {
    padding: 10px 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: sticky;
    top: 0;
    z-index: 500;
    height: 64px;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 30;
    padding: 1rem 0;
    backdrop-filter: blur(12px);
    /* backdrop-filter: blur(24px); */
  }
  .content_center {
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    background-color: var(--dark-2);
  }
  .contentwrapper {
    border-radius: 20px;
    @media (min-width: 780px) {
      height: 100vh;
    }

    background-color: var(--dark-2);
    border-radius: 8px;
    .footer_wrapper {
      display: grid;
      padding: 3rem 0;
      padding-top: 5rem;
      padding-bottom: 5rem;
      border-bottom: rgba(255, 255, 255, 0.5);
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 2rem;
    }
  }
`;

export default Content;
