import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/user/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <div className="m-auto flex max-w-3xl items-center justify-between">
        <Link to="/" className="tracking-widest">
          Fast React Pizza Co.
        </Link>

        <SearchOrder />

        <Username />
      </div>
    </header>
  );
}
