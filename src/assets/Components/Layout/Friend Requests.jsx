import React, { useState } from "react";

const FriendRequests = () => {
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState(["JohnDoe", "JaneDoe", "Alice"]);

  const acceptRequest = (name) => {
    setFriends([...friends, name]);
    setRequests(requests.filter((request) => request !== name));
  };

  return (
    <div className="container">
      <h2>Friend Requests</h2>
      {requests.length === 0 ? (
        <p>No new requests.</p>
      ) : (
        requests.map((request, index) => (
          <div key={index} className="friend-request">
            <p>{request}</p>
            <button onClick={() => acceptRequest(request)}>Accept</button>
          </div>
        ))
      )}
      <h3>Your Friends</h3>
      {friends.length === 0 ? (
        <p>No friends yet.</p>
      ) : (
        friends.map((friend, index) => <p key={index}>{friend}</p>)
      )}
    </div>
  );
};

export default FriendRequests;
