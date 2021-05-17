import React from "react";

const TableComp = (props) => {
    return (
        <tr>
            <td>{props.i + 1}</td>
            <td>{props.name}</td>
            <td xs={6}>{props.age}</td>
            <td>{props.gender}</td>
        </tr>
    )
}

export default TableComp;