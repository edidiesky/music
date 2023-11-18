"use client"
import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../common/leftsidebar';
import Content from './content/Content';

const SearchIndex: React.FC = () => {
    return (
        <SearchStyles className="w-100">
            <LeftSidebar />
            <div className="w-100">
                <div className="w-100">
                    <Content />
                </div>
            </div>
            {/* <LeftSidebar /> */}
        </SearchStyles>
    )
}

const SearchStyles = styled.div`
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

export default SearchIndex