
"use client"
import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../common/leftsidebar';
import Content from './content/Content';
import { Bottom } from '../common/Bottom';

const LikedMusic: React.FC = () => {
    return (
        <LikedMusicStyles className="w-100 flex gap-2 column">
            <div className="w-100 likeMusicWwrapper flex item-start gap-2">
               <div className="liked_content flex item-start w-100">
                    <LeftSidebar />
                    <div className="w-100">
                        <div className="w-100">
                            <Content />

                        </div>
                    </div>
               </div>
            </div>
            <div className="w-100 bottomWrapper">
                <Bottom />
            </div>
            {/* <LeftSidebar /> */}
        </LikedMusicStyles>
    )
}

const LikedMusicStyles = styled.div`
    width: 100%;
    display:flex;
    gap:2px;
    height:100vh;
    overflow:hidden;
    .bottomWrapper {
        height:15%;
    }
    .likeMusicWwrapper{
        height:85%;
        align-items: flex-start;
        @media (min-width:780px) {
        overflow: hidden;
        }
        .liked_content{
            height:100%;
            overflow:auto;
        }
        @media (max-width:780px) {
        flex-direction: column-reverse;
        }
    }
    
  `

export default LikedMusic