"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function SearchBox() {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex items-center justify-between max-w-6xl px-5 mx-auto"
      onSubmit={onSubmit}>
      <input
        type="text"
        onChange={handleChange}
        className="flex-1 w-full placeholder-gray-500 bg-transparent rounded-sm h-14"
        placeholder="Search keywords..."
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400">
        Submit
      </button>
    </form>
  );
}
