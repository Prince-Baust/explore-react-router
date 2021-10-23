import React from 'react';
import {Link} from "react-router-dom";

const Friend = ({friend}) => {
    const {id, name, phone, email, website, address} = friend;

    const url = `/friend/${id}`;
    return (
        <div style={{border: "3px solid blue",
            borderRadius: "10px",
            padding: "5px"
        }}>
            <h2>{name}</h2>
            <h5>{phone}</h5>
            <h5>{email}</h5>
            <h5>{website}</h5>
            <p><small>{address.city}</small></p>
            <Link to={url}>Visit Me</Link>
        </div>
    );
};

export default Friend;
