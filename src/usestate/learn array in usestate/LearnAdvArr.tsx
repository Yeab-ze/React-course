import React, { useState } from "react";

const LearnAdvArr = () => {
  const [movies, setMovies] = useState([
    {
        img: 'https://m.media-amazon.com/images/M/MV5BYTFhZTExZGItMTc4Zi00ZThkLWFlZTUtNWRkZWJiNGFkZTEyXkEyXkFqcGc@._V1_.jpg',
      title: "spider man",
      rating: 9.5,
      actor: "yeabsita",
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BYTFhZTExZGItMTc4Zi00ZThkLWFlZTUtNWRkZWJiNGFkZTEyXkEyXkFqcGc@._V1_.jpg',
      title: "spider man",
      rating: 9.5,
      actor: "yeabsita",
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BYTFhZTExZGItMTc4Zi00ZThkLWFlZTUtNWRkZWJiNGFkZTEyXkEyXkFqcGc@._V1_.jpg',
      title: "spider man",
      rating: 9.5,
      actor: "yeabsita",
    },
  ]);
  return (
    <>
  <div className="grid grid-cols-2 gap-3">
        <div className="border rounded-md">
        {movies.map((movie) => (
          <li key={Math.random()}>
           <img src={movie.img} alt="" />
            <p className="text-green-500">{movie.title}</p>
            <p className="text-red-500">{movie.rating}</p>
            <p>{movie.actor}</p>
          </li>
        ))}
      </div>
  </div>
    </>
  );
};

export default LearnAdvArr;
