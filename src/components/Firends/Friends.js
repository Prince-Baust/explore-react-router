import React, {useEffect, useState} from 'react';
import Friend from "../Friend/Friend";
import './friends.css'
const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return (
        <div>
            <h2>I have {friends.length} friends</h2>
            <div className="friends-container">
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}/>)
                }
            </div>
        </div>
    );
};

export default Friends;
