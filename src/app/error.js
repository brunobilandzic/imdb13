"use client";

import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center   mt-4">
      <h2>Something went wrong</h2>
      <button onClick={reset} className="hover:text-amber-500">Try again</button>
    </div>
  );
}
