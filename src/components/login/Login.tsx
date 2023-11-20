import SpotifyIcon from '@/assets/svg/twitter';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import styled from 'styled-components';
import FormInput from '../form/input';
import Link from 'next/link';
import Message from '../loaders/Message';
const Login: React.FC = () => {
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('false');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    return (
        <LoginStyles className="w-100 flex column gap-8">
            {/* <LeftSidebar /> */}
            <div className="top_wrapper w-100">
                <Link href={'/'} className="flex item-center w-100">
                    <SpotifyIcon color='#fff' />
                </Link>
            </div>
            <div className="bottom_wrapper ">
                <div className=" flex column gap-4">
                    <h2 className="fs-40 text-extra-bold text-center text-white">
                        Log in to Spotify
                    </h2>
                    {/* <div className="w-90 auto">
                        <Message
                            alertText='Hello an error did occur'
                            alertType='danger'
                            showAlert={true}
                        />
                    </div> */}

                    <div className="auto login_auth_form_wrapper btn_wrapper w-100 flex justify-center item-center column gap-1">
                        <div className="authbtn w-100 flex item-center justify-center gap-2 fs-14 text-extra-bold text-white auth_btn2">
                            <FaFacebook fontSize={'24px'} />
                            Sign up with Facebook</div>
                        <div className="authbtn  flex item-center justify-center gap-2 fs-14 text-extra-bold w-100 text-white text-grey">
                            <FcGoogle fontSize={'24px'} />
                            Sign up with Google</div>
                        <div className="option fs-18"></div>
                        <div className="w-100 flex column gap-2">
                            <FormInput label={'whats your email?'} state={email} setState={setEmail} placeholder={'whats your email?'} />
                            <FormInput label={'Create a Password'} state={password} setState={setPassword} placeholder={'Create a password'} />
                            <div className="btn_wrapper w-100 flex item-center justify-center fs-16 text-dark">
                                <div className="authbtn btn_3 text-center w-100 text-extra-bold">Sign Up</div>
                            </div>
                        </div>
                        <div className="option fs-18"></div>
                        <h4 className="flex fs-14 item-center gap-1">
                            <span className="text-grey text-bold">Don't have an account?</span>
                            <Link href={'/auth'} className="text-white log text-bold">Sign up for Spotify</Link>
                        </h4>
                    </div>
                </div>
            </div>

        </LoginStyles>
    )
}


const LoginStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    /* background-color: #fff; */
    background-image:linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
    .log{
    transition: all .4s;
    text-decoration: underline;
    color:var(--green);
    cursor:pointer;
    &:hover {
      
    }
  }
    .text_secondary {
        text-decoration: underline;
    }
.top_wrapper{
    padding:30px 40px;
    background:#000000;
     @media (max-width:780px) {
       display:none;
    }
}
.btn_wrapper {


            .authbtn {
                border: 2px solid #000;
                    font-size: 14px;
                padding:1rem 1.7rem;
                &:hover {
  transform: scale(1.02);
}
                border-radius: 40px;
                @media (max-width:580px) {
                    font-size: 14px;
                }
                &.btn_3 {
                padding:1.5rem 4rem;
                background-color:#1ED760;
                border:none;
                margin: 30px auto;
                }
               
                
            }
        }
  .option {
      width: 100%;
      position: relative;
      text-align: center;
      font-size: 12px;
      margin:3rem auto;
      &::after {
        width: 100%;
        height: 0.2px;
        content: "";
        background-color: rgba(255, 255, 255, 0.4);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
.bottom_wrapper {
    max-width:734px;
        width:100%;
    margin:50px auto;
    padding:70px 40px;
    background:#000000;
    border-radius:25px;
    @media (max-width:780px) {
        min-height:100vh;
        width:100%;
    border-radius:0;
        margin:0;
        overflow:auto;
    }
    .login_auth_form_wrapper{
    margin:0 auto;
        width:360px;
        @media (max-width:380px) {
        width:100%;

        }
    }

     .authbtn {
                border: 2px solid #000;
                padding:1.4rem 2rem;
                border:1px solid rgba(255,255,255,.6);
                &:hover {
                    transform: scale(1.02);
                }
                border-radius: 40px;
                /* @media (max-width:580px) {
                    font-size: 14px;
                }
                &.btn_3 {
                padding:2rem 4rem;
                background-color: var(--green);
                border:none;
                }
                &.auth_btn2 {
                    border: none;
                    background-color: #405A93 !important;
                } */
                
            }
}
  `

export default Login