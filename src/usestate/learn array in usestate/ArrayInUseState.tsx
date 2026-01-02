import React, { useState } from "react";
import { CiFries } from "react-icons/ci";
import { TbFriends } from "react-icons/tb";

const ArrayInUseState = () => {
  const [friends, setFriends] = useState(["alex", "yeab", "getachw"]);
  const addFriends = () => setFriends([...friends, "martha"]);
  const removeFriends = () => setFriends(friends.filter((friend) => friend !== 'martha'))
  const updateFriends = () => setFriends(friends.map((friend) => friend === 'yeab' ? 'yeab Getachew' : friend))
  return (
    <div>
      {friends.map((friend) => (
        <h2 key={Math.random()}>{friend}</h2>
      ))}
      <button className="bg-green-500 ml-3 rounded-md py-px px-3" onClick={addFriends}>
        add friends
      </button>
      <button className="bg-red-500 ml-3 rounded-md py-px px-3" onClick={removeFriends}>
        remove friends
      </button>
         <button className="bg-yellow-500 ml-3 rounded-md py-px px-3" onClick={updateFriends}>
        update friends
      </button>
    </div>
  );
};

export default ArrayInUseState;
