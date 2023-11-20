import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import moment from "moment";
type TableCardProps = {
    music?: any;
    type?: string
}
export const TableCard: React.FC<TableCardProps> = ({ music, type })=> {
    let startdate = moment(music?.startDate);

    return (
        <>
            <tr key={music?._id}>
                <td>
                </td>
            </tr>
        </>
    );
}
