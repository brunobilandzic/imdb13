import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${params.searchTerm}&include_adult=false`
  );
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length == 0 && (
        <div>
          <h2 className="pt-6 text-center"> No results found for {params.searchTerm} </h2>
        </div>
      )}

      {results && results.length > 0 && (
        <div>
          <h2 className=""> Results for {params.searchTerm} </h2>
          <Results results={results} />
        </div>
      )}
    </div>
  );
}
