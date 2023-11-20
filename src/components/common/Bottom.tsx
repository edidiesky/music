import { useAppSelector } from "@/hooks/reduxtoolkit"
import React from "react"
import styled from "styled-components"

type BottomTypeProps = {
    type?: string
}

export const Bottom: React.FC<BottomTypeProps> = ({ type }) => {
    const { userInfo } = useAppSelector(store => store.auth)
    return (
        <BottomWrapperStyles className="w-100">
            <div className="w-100">
                <div className="w-90 auto flex item-center justify-space">
                    <div className="flex left item-center gap-1">
                        
                    </div>
                    <div className="flex center flex-1 item-center gap-1"></div>
                    <div className="flex right item-center gap-1"></div>
                </div>
            </div>
            {/* {
                userInfo ? <div className="w-100">
                    <div className="w-100 auth_footer flex item-center">
                        <div className="w-90 auto flex item-center justify-space">
                            <h4 className="fs-14 text-light text-white">
                                <span className="block uppercase fs-14">PREVIEW OF SPOTIFY</span>
                                <span className="text-bold py-1">
                                    Sign up to get unlimited songs and podcast width occasional ads.
                                    No credit card needed
                                </span>
                            </h4>
                            <div className="flex item-center gap-1 justify-end">
                                <div className="btn fs-14 text-dark text-extra-bold">Sign Up Free</div>
                            </div>
                        </div>
                    </div>
                </div> : <div className="w-100">
                    <div className="w-100 flex item-center">
                       
                    </div>
                </div>
            } */}
        </BottomWrapperStyles>
    )
}

const BottomWrapperStyles = styled.div`

  .auth_footer {
    background: linear-gradient(90deg, #af2896, #509bf5);
    padding: 1rem 0;
  }
`;