import React from "react";
import Image from "next/image";
import moment from "moment";
type TableCardProps = {
    music?: any;
    type?: string;
    index?: any
}
export const TableCard: React.FC<TableCardProps> = ({ music, type, index }) => {
    let startdate = moment(music?.startDate);

    return (
        <>
            <tr key={music?._id}>
                <td>
                    <div className="w-100 flex item-center gap-2">
                        <h4 className="fs-16 text-white text-bold">{index + 1}</h4>
                        <div className="flex item-center gap-1">
                            <picture className="">
                                <Image
                                    style={{ width: "4.5rem", height: "4rem" }}
                                    className="sm:w-9/12"
                                    alt="Liked-Image"
                                    width={0}
                                    sizes="100vw"
                                    height={0}
                                    loading="lazy"
                                    src={music?.image}
                                />
                            </picture>
                            <h4 className="text-white fs-15 text-bold">
                                <span>Shallow - Road Edit</span>
                                <span className="text-grey fs-13 block">Lady Gaga, Bradley Cooper</span>
                            </h4>
                        </div>
                    </div>
                </td>
                <td>
                    <h4 className="fs-14 text-bold text-grey">A start is born today with over ....</h4>
                </td>
                <td>
                    <h4 className="fs-14 text-bold text-grey">1 hour ago.</h4>

                </td>
            </tr>
        </>
    );
}
