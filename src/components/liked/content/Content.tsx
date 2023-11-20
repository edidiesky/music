
import React from 'react';
import Image from "next/image";
import { BsSearch } from 'react-icons/bs'
import { IoTimeOutline } from "react-icons/io5";
import { BsFillPlayFill } from "react-icons/bs";
import styled from 'styled-components';
import { Footer } from "@/components/common/footer";

import { FiChevronRight, FiChevronLeft, FiMusic } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { data } from '@/data';
import { TableCard } from '@/components/common/TabeCard';
import { Table } from '@/components/common/styled';

const Content: React.FC = () => {
    return (
        <ContentStyles className="w-100 flex column gap-2">
            <div className="contentwrapper w-100">
                <div className="content_top flex column gap-2 w-100">
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

                        </div>
                        <div className="flex item-center gap-1 justify-end">
                            <div className="btn fs-14 text-dark text-extra-bold">Sign Up</div>
                        </div>
                    </div>
                    <div className="w-90 auto flex item-center gap-2">
                        <div className="icon_upload shadow flex item-center justify-center">
                            <picture className="w-full w-100 h-100">
                                <Image
                                    style={{ width: "100%", height:"100%" }}
                                    className="sm:w-9/12"
                                    alt="Liked-Image"
                                    width={0}
                                    sizes="100vw"
                                    height={0}
                                    loading="lazy"
                                    src='https://misc.scdn.co/liked-songs/liked-songs-640.png' />
                            </picture>
                        </div>
                        <h1 className="text-extra-bold text-white fs-50">
                            <span className="block fs-14">Playlists</span>

                            Liked Songs
                            <span className="block fs-14">Edidiong Essien</span>
                        </h1>
                    </div>
                </div>
                <div className="flex w-100 column gap-2">

                    <div className="content_center flex column gap-2">
                        <div className="w-90 auto py-2 flex column gap-4">
                            <div className="playicon flex item-center justify-center">
                                <BsFillPlayFill
                                    fontSize={"3rem"}
                                    color="var(--dark-1)"
                                />
                            </div>
                            <div className="search flex item-center justify-space w-100">
                                <div className="w-100">
                                    {data?.length > 0 && (
                                        <Table>
                                            <div className="TableContainer">
                                                <table className="tableWrapper">
                                                    <thead>
                                                        <tr>
                                                            <th># Title</th>
                                                            <th>Album</th>
                                                            <th>Date added</th>
                                                            <th><IoTimeOutline fontSize={'18px'}/></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data?.slice(0,2).map((music?:any, index?:any) => {
                                                            return <TableCard music={music} index={index} />;
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </ContentStyles>
    )
}

const ContentStyles = styled.div`
    width: 99%;
    margin: 0 auto;
    padding: .5rem 0;
    .playicon {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
       
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
        background: var(--green);
        z-index: 30;
        cursor: pointer;
        transition:all .4s;
        &:hover {
            transform:scale(1.15);
        }
      }
   
    .icon_upload{
        width: 25rem;
        background-color: var(--grey-3) !important;
        height: 25rem;
        border-radius: 1px;
        box-shadow: 0 8px 20px rgba(0,0,0,.2);
        svg {
            font-size: 100px;
            color: var(--grey-1);
            @media (max-width:580px) {
            font-size: 50px;

            }
        }
    }
    h1 {
        font-size: 86px;
        @media (max-width:780px) {
            font-size: 50px;
        }
        @media (max-width:580px) {
            font-size: 40px;

            }
    }

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

    .grid_wrapper {
        grid-template-columns: repeat(auto-fit,minmax(160px,1fr));
        grid-gap: 2rem;
    }
   .content_top {
    padding: 2rem 0;
    background-color: rgb(80, 56, 160);
    background-image:linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=);;
   
}
   .content_center {
    height: 100%;
    background-color: rgb(80, 56, 160);
    min-height: 20rem;
    background-image:linear-gradient(rgba(0,0,0,.6) 0,#121212 100%),url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=");
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