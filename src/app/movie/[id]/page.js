import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

export default async function MoviePage({ params }) {
  const movie = await getMovie(params.id);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center max-w-6xl p-4 mx-auto md:pt-8 md:flex-row md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="movie poster"
        />
        <div className="p-2 text-center">
          <h2 className="m-3 text-lg font-bold">{movie.title || movie.name}</h2>
          <p className="mb-3 text-lg">
            <span className="mr-1 font-semibold">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Date released:</span>
            {movie.release_date || movie.first_air_date}{" "}
          </p>
          <p className="mb-3">
            <span className="mr-1 font-semibold">Rating:</span>
            {movie.vote_count}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
