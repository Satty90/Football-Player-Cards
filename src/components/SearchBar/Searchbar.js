"use client";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  const [search, setSearch] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/api/players?search=" + search)
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, [search]);

  console.log(search);
  return (
    <form className="relative">
      <div className="relative">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Find Your Player"
          className="w-full p-4 rounded-full bg-slate-800 "
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-500 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
      <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
        {players.map((player) => (
          <div key={player.id}>
            {player.first_name + " " + player.last_name}
          </div>
        ))}
      </div>
    </form>
  );
};

export default Searchbar;
