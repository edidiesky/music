import SpotifyIcon from '@/assets/svg/twitter';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSpotify } from 'react-icons/bs'
import FormInput from '../form/input';
const AuthIndex: React.FC = () => {
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('false');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    return (
        <AuthStyles className="w-100 flex item-center justify-center">
            {/* <LeftSidebar /> */}
            <div className="authwrapper text-center text-dark flex column justify-center item-center gap-2">
                <div className="flex item-center gap-1">
                    <SpotifyIcon />
                    {/* <BsSpotify fontSize={'40px'} color='var(--dark-1)'/>
                    <h3 style={{letterSpacing:".4px"}} className="fs-30 text-extra-bold">Spotify</h3> */}
                </div>
                <h3 className="fs-30 w-100 auto  text-extra-bold">Sign up for free to start listening.</h3>
                <div className="auto btn_wrapper flex justify-center item-center column gap-1">
                    <div className="authbtn fs-14 text-extra-bold w-100 text-white auth_btn2">Sign up with Facebook</div>
                    <div className="authbtn fs-14 text-extra-bold w-100 text-white text-grey">Sign up with Google</div>
                    <div className="option fs-18">or</div>

                </div>
                <div className="w-90 auto flex column gap-2">
                    <FormInput label={'whats your email?'} state={email} setState={setEmail} placeholder={'whats your email?'} />
                    <FormInput label={'Create a Password'} state={password} setState={setPassword} placeholder={'Create a password'} />
                    <FormInput label={'Name'} state={name} setState={setName} placeholder={'Enter your profile Name'} />

                    <div className="flex column py-2 item-center justify-center gap-2">
                        <h5 className="fs-10 text-bold">By clicking on sign-up, you agree to the
                            {' '}
                            <span className="text-bold text_secondary">Spotify Terms and Conditions</span> and <span className="text-bold text_secondary">Privacy Policy.</span></h5>
                        <div className="btn_wrapper w-100 flex item-center justify-center fs-16 text-dark">
                            <div className="authbtn btn_3 text-extra-bold">Sign Up</div>
                        </div>
                        <h4 className="fs-14 text-bold text-dark">
                            Have an account? {" "}  <span className="text-bold text_secondary">Log In</span>
                        </h4>
                    </div>

                </div>
            </div>
        </AuthStyles>
    )
}


const AuthStyles = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: auto;
    padding: 4rem 0;
    .text_secondary {
        text-decoration: underline;
    }
    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding:1.4rem;
      font-size: 12px;
      
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .authwrapper {
        width: 40%;
        margin: 0 auto;
        height: 100%;
        @media (max-width:980px) {
            width:clamp(60%,200px,90%);
        }  @media (max-width:580px) {
            width:clamp(80%,260px,90%);
        }
        .btn_wrapper {
            width: 90%;
  /* transition: all 0.4s ease; */



            .authbtn {
                border: 2px solid #000;
                padding:1.3rem 1.7rem;
                &:hover {
  transform: scale(1.02);
}
                border-radius: 40px;
                @media (max-width:580px) {
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
                }
                
            }
        }
    }
  `

export default AuthIndex