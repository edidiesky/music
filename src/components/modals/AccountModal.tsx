

import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { AiOutlineCheck } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from "../../hooks/reduxtoolkit";
import { BiSolidBadgeCheck } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

type modalType = {
  modal: boolean;
  id?: string;
  setModal: (val: boolean) => void;
}

const AccountModal: React.FC<modalType> = ({ modal, setModal, id }) => {
  const dispatch = useAppDispatch()


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
        <button onClick={()=> setModal(false)} className="btn btn-3 text-grey fs-15 text-extra-bold">Close</button>

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
            <h4 className="flex fs-12 item-center gap-1">
              <span className="text-grey text-bold">Already have an account</span>
              <Link href={'/login'} className="text-white log text-extra-bold">Log in</Link>
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
  .log{
    transition: all .4s;
    cursor:pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .btn {
    &.btn-1 {
      background:var(--green) !important;
    }

     &.btn-2 {
     padding:1.5rem 2rem;
     background:transparent;
    }
     &.btn-3 {
     padding:1.5rem 2rem;
     background:transparent;
     border:none;
     color:#fff;
     position: absolute;
     bottom:-10%;
     z-index: 2000;
     
     font-size: 14px;
      @media (max-width:780px) {
        bottom:2%;
      }
     &:hover {
      color:#Fff;
     }
    }
  }
  .image_wrappers{
    /* height:30rem; */
     @media (max-width:780px) {
    width:40%;
    margin:0 auto;

        }
        @media (max-width:580px) {
    width:50%;
    margin:0 auto;

        }
    
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
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
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

 
  .backdrop {
    background:rgba(0,0,0,.9);
    z-index:20;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .deleteCard {
    max-width: 810px;
    width: 810px;
    display: flex;
    z-index:210000;
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
    @media (max-width:980px) {
      width:70%;
      margin:0 auto;
      /* height:100vh; */
     }
     @media (max-width:580px) {
      width:100%;
      height:100vh;
      border-radius:none;
     }
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
