import React from 'react';

const Friend = ({friend}) => {
    const {name, phone, email, website, address} = friend;
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
        </div>
    );
};

export default Friend;
