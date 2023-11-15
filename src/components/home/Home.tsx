import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../common/leftsidebar';
import Content from './content/Content';

const HomeIndex: React.FC = () => {
    return (
        <HomeStyles className="w-100">
            <LeftSidebar />
            <div className="w-100">
                <div className="w-100">
                    <Content />
                </div>
            </div>
            {/* <LeftSidebar /> */}
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
    width: 100%;
    display:flex;
    gap:2px;
    align-items: flex-start;
    @media (min-width:780px) {
        height: 100vh;
    overflow: auto;
    }
    @media (max-width:780px) {
        flex-direction: column-reverse;
    }
  `

export default HomeIndex