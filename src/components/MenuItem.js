import Link from "next/link";
import React from "react";

export default function MenuItem({ title, Icon, address }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="mx-4 text-2xl sm:hidden" />
        <p className="hidden text-sm sm:inline">{title}</p>
      </Link>
    </div>
  );
}
