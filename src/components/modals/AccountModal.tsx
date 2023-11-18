

import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { AiOutlineCheck } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { BiSolidBadgeCheck } from "react-icons/bi";
import Image from "next/image";

type modalType = {
  modal?: boolean;
  id?: string;
  setModal?: (val: boolean) => void;
}

const AccountModal: React.FC<modalType> = ({ modal, setModal, id }) => {
  const dispatch = useAppDispatch()
  const [colortab, setColorTab] = useState(0)
  const [backgroundtab, setBackgroundTab] = useState(0)
  const [color, setColor] = useState([
    {
      text: "blue-theme",
      color: "var(--blue-1)"
    },
    {
      text: "yellow-theme",
      color: "#FFD400"
    },
    {
      text: "pinkred-theme",
      color: "#F91880"
    },
    {
      text: "purple-theme",
      color: "#7856FF"
    },
    {
      text: "greyred-theme",
      color: "#FF7A00"
    },
    {
      text: "green-theme",
      color: "#00BA7C"
    }
  ])


  return (
    <AccountModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop"></div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow gap-2"}
      >
        <div className="w-85 auto account_modal_wrapper">
          <div className="left w-100">
            <div className="w-100 image_wrappers">
              <Image
                className='w-100 h-100'
                src='https://i.scdn.co/image/ab67706f000000025d018c21b12c334ab7fb9297'
                alt=''
                width={0}
                sizes="100vw"
                height={0}
                loading="lazy"
              />
            </div>
          </div>
          <div className="right flex column gap-3 item-center justify-center">
            <h3 className="fs-30 text-extra-bold text-center text-white">
              Start listening with a free account
            </h3>
            <div className="flex item-center flex column gap-2">
              <button className="btn btn-1 fs-15 text-extra-bold">Sign up free</button>
              <button className="btn btn-2 fs-15 text-white text-extra-bold">Download app</button>
            </div>
            <h4 className="flex fs-14 item-center gap-2">
              <span className="text-grey text-bold">Already have an account</span>
              <span className="text-white text-extra-bold">Log in</span>
            </h4>
          </div>
        </div>
      </motion.div>
    </AccountModalStyles>
    // <h2>hello</h2>
  );
}
export default AccountModal

const AccountModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 5800;
  align-items: center;
  justify-content: center;
  top: 0;
  overflow: hidden;
  .btn {
    &.btn-1 {
      background:var(--green) !important;
    }

     &.btn-2 {
     padding:1.5rem 2rem;
     background:transparent;
    }
  }
  .image_wrappers{
    /* height:30rem; */
    
    img {
      width:100%;
      height:100%;
      border-radius:15px;
    }
  }
  .account_modal_wrapper{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:4rem;
    /* place-items:start; */
  }
  .card {
    padding: 1rem 2rem;
    border: 1px solid var(--border1);
    border-radius: 20px;
  }
  .background_tab {
    padding:1.7rem 1rem;
    border-radius: 4px;
    cursor:pointer;
    min-height:7.5rem;
    background-color: #fff;
    &.active {
      border: 2px solid var(--blue-1);
    }
    &.tab1 {
      background-color: #15202B;
      border: none;
       &.active {
      border: 2px solid var(--blue-1);
    }
    }
    &.tab2 {
      background-color: #0e0d0c;
      border: none;
       &.active {
      border: 2px solid var(--blue-1);
    }
    }
  }
  .icons1 {
     width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
     &:hover {
       background-color:rgba(207, 217, 222,.9);
     }

    &.icon2 {
       &:hover {
      background-color:#f9f9f90f;
    }
    }
   
    /* background-color: var(--dark-grey-hover); */
    .icon_check {
      border: 2px solid var(--grey-1);
      width: 60%;
      height: 60%;
      border-radius: 50%;
      &.active {
        opacity: 1;
        visibility: visible;
        background-color: var(--blue-1);
      border: none;

        svg {
 opacity: 1;
        visibility: visible;
        }
      }
      svg {
          width: 60%;
      height: 60%;
      opacity: 0;
      visibility: hidden;
      color: #fff;
      transition: all .3s;
      }
    }
  }
  .card_color {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor:pointer;
    span {
      opacity: 0;
      visibility: hidden;
      transition: all .3s;
      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .top {
    height: 595px;
    overflow:auto;
    border-radius: 20px;
    padding: 2rem 0;
  }
  .tab_wrapper {
    background-color: var(--grey-2);
    padding:1.4rem;
    border-radius: 13px;
  }
  .replyBtn {
    padding:4px 10px;
    border-radius:20px;
    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }
   .replyBtn1 {
    padding:2px 15px;
    border-radius:20px;
    border:1px solid rgba(0,0,0,.4);
    &:hover {
      background:rgba(29, 155, 240, 0.1);
    }
  }


  .profile_background {
    background-color: #B2B2B2;
    height: 20rem;
    position:relative;
  }
  .btn-3 {
        padding: 1.4rem 2.5rem;
        background-color: var(--blue-1) !important;
  }
  .icon {
  }
  .icons:hover {
  background:rgba(29, 155, 240, 0.1) !important;
  }
 
  .backdrop {
    background:rgba(0,0,0,.9);
    z-index:200000;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    max-width: 810px;
  width: 810px;
    display: flex;
    z-index:210000;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding:70px 20px;
    background-image: linear-gradient(-180deg,rgba(0,0,0,.4),#282828);
    background-color: rgb(79, 127, 119);
    border-radius: 14px;
    box-shadow:var(--shadow);

    position: relative;
    margin-top:2rem;
  }
   .image_wrapper {
      width:4.5rem;
      height:4.5rem;
      position: relative;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
      .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      z-index: 200;
      position: absolute;
      background:rgba(0,0,0,.5);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      position: absolute;
      object-fit: cover;
    }
    }
`;
