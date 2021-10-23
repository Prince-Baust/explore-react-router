import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

const FriendDetails = () => {
    const [friend, setFriend] = useState({});
    const {friendID} = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);

    const {name, phone, email, website, company} = friend;

    return (
        <div>
            <h2>{name}</h2>
            <h3>{phone}</h3>
            <h4>{email}</h4>
            <h5>{website}</h5>
            <h5>{company?.name}</h5>
        </div>
    );
};

export default FriendDetails;
