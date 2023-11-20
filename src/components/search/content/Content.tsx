
import React from 'react';
import { BsFillPlayFill, BsSearch } from 'react-icons/bs'
import styled from 'styled-components';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Content: React.FC = () => {
    return (
        <ContentStyles className="w-100 flex column gap-2">
            <div className="contentwrapper w-100">
                <div className="content_top w-100">
                    <div className="w-90 auto flex item-center justify-space">
                        <div className="flex item-center gap-1">
                            <div className="flex item-center gap-1">
                                <div className="icons flex item-center justify-center">
                                    <FiChevronLeft fontSize={'20px'} />
                                </div>
                                <div className="icons flex item-center justify-center">
                                    <FiChevronRight fontSize={'20px'} />
                                </div>
                            </div>
                            <div className="search_form flex item-center gap-2">
                                <div className=""> <div className="icons1 flex item-center justify-center">
                                    <BsSearch fontSize={'18px'} />
                                </div></div>
                                <input type="text" className='flex-1' placeholder='what do you want to listen to' />
                            </div>
                        </div>
                        <div className="flex item-center gap-1 justify-end">
                            <div className="btn fs-14 text-dark text-extra-bold">Sign Up</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-100 column gap-2">

                    <div className="content_center flex column gap-2">
                        <div className="w-90 auto py-2 flex column gap-2">
                            <h3 className="fs-24 text-extra-bold">Focus</h3>
                        </div>
                    </div>
                </div>
                <div style={{ background: "var(--dark-2)" }} className="w-100 ">
                    <div className="w-90 auto footer_wrapper">
                        <div className="flex column gap-2">
                            <h4 className="fs-14 text-extra-bold">Communities</h4>
                            <ul className="flex column gap-1 text-grey text-extra-bold fs-14">
                                <li>About</li>
                                <li>Jobs</li>
                                <li>For the record</li>
                            </ul>
                        </div>
                        <div className="flex column gap-2">
                            <h4 className="fs-14 text-extra-bold">Company</h4>
                            <ul className="flex column gap-2 text-grey text-extra-bold fs-14">
                                <li>For Artists</li>
                                <li>For Developers</li>
                                <li>Advertising</li>
                                <li>Investors</li>
                                <li>Vendors</li>
                                <li>Spotify for Work</li>
                                <li>Advertising</li>
                            </ul>
                        </div>
                        <div className="flex column gap-2">
                            <h4 className="fs-14 text-extra-bold">Useful Links</h4>
                            <ul className="flex column gap-1 text-grey text-extra-bold fs-14">
                                <li>Support</li>
                                <li>Free Mobile App</li>
                            </ul>
                        </div>
                        <div className="flex item-start justify-end gap-2">
                            <div className="icons icon2 flex item-center justify-center">
                                <FaInstagram fontSize={'20px'} />
                            </div><div className="icons icon2 flex item-center justify-center">
                                <FaTwitter fontSize={'20px'} />
                            </div><div className="icons icon2 flex item-center justify-center">
                                <FaFacebook fontSize={'20px'} />
                            </div>
                        </div>
                    </div>
                    <div className="w-90 auto fs-14 text-grey text-light">
                        @2023 Spotify EddyCodeVerse
                    </div>
                </div>
            </div>
        </ContentStyles>
    )
}

const ContentStyles = styled.div`
    width: 99%;
    margin: 0 auto;
    padding: .5rem 0;
    .icons1 {
        background-color: inherit !important;
        position: absolute;
        left: 2%;
        top: 50%;
        transform: translateY(-50%);
    }
    .icons {
        background-color: var(--dark-1) !important;
    }
    .icons.icon2 {
        background-color: var(--grey-3) !important;
    }
    .search_form {
        
        background-color: var(--grey-3);
        border-radius: 60px;
        height: 5rem;
        width: 400px;
        position: relative;
        padding: 0 2rem;
        &:hover {
            border: 2px solid rgba(255,255,255,1);
        }
        
        input {
            border: none;
          outline: none;
          font-family: inherit;
          font-size: 14px;
          color: #fff;
          background-color: transparent;
          /* width: 100%; */
          height: 100%;
        border-radius: 60px;
         

          &::placeholder {
          color: var(--grey-1);

          }
          /* &:hover {
            border: 2px solid rgba(255,255,255,1);
        } */
        }
    }
    .grid_wrapper {
        grid-template-columns: repeat(auto-fit,minmax(160px,1fr));
        grid-gap: 2rem;
    }
   .content_top {
    padding: 8px 0;
    background-color: transparent;
    position: sticky;
    top: 0;
    z-index: 500;
    height: 64px;
    backdrop-filter: blur(24px);
   }
   .content_center {
    height: 100vh;


    background-color: var(--dark-2);
   }
    .contentwrapper{
        @media (min-width:780px) {
        height: 100vh;
    }

        background-color: var(--dark-2);
         border-radius: 8px;
         .footer_wrapper {
            display: grid;
            padding: 3rem 0;
            padding-top: 5rem;
            padding-bottom: 5rem;
            border-bottom: rgba(255,255,255,.5);
            grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
            grid-gap: 2rem;
         }

    }
  `

export default Content