import React, { useState } from "react";

const InstagramLike = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
    setLikes(prev => prev + 1);
  };

  return (
    <div className="border p-4 w-40 text-center rounded">
      <button onClick={handleLike} className="text-xl">
        ❤️ Like
      </button>
      <p className="mt-2">Likes: {likes}</p>
    </div>
  );
};

export default InstagramLike;




