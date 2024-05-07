"use client";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDebouncedCallback } from "use-debounce";

const Searchbar = ({ onSearch }) => {
  const [search, setSearch] = useState(null);

  const handleSearch = useDebouncedCallback((value) => {
    console.log("Searching... " + search);
    setSearch(value);
  }, 500);

  useEffect(() => {
    fetch("/api/players?search=" + search)
      .then((response) => response.json())
      .then((data) => onSearch(data))
      .catch((error) => console.error(error));
  }, [onSearch, search]);

  return (
    <form className="relative">
      <div className="relative">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          type="search"
          placeholder="Find Your Player"
          className="w-full p-4 rounded-full bg-slate-800 text-white "
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-500 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
