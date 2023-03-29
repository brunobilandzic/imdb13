import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function CardComponent({ result }) {
  return (
    <div className="transition-shadow duration-200 rounded-lg cursor-pointer sm:p-3 group sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="transition-opacity duration-200 sm:rounded-t-lg group-hover:opacity-80"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image not found"></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-base">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3"/> {result.vote_count}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
}
