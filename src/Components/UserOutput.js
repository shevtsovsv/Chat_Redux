import React, {useState} from "react";
import {Table} from "react-bootstrap";
import TableComp from "./TableComp";
import {Link} from "react-router-dom";

 const UserOutput = () => {
    let [userArray, setUserArray] = useState([
        {
            name: "Alex",
            age: 22,
            gender: "male"
        },
        {
            name: "Tom",
            age: 22,
            gender: "male"
        },
        {
            name: "Harry",
            age: 22,
            gender: "male"
        }
    ] )
    return <div>
        <Table>
            <tbody>
            {userArray.map((item,i)=>(
                <TableComp key={i} name={item.name} age = {item.age} gender = {item.gender} i={i}></TableComp>
            ))}
            </tbody>
        </Table>
        <Link className="blablabla" role="button" to="/">Home</Link>
    </div>;
}

export default UserOutput;