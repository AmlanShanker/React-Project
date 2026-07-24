import React from "react";
const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-red-500"
      />
    </div>
  );
};

export default SearchBar;
