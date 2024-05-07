"use client";
import SearchBar from "@/components/SearchBar";
import PlayerCard from "@/components/Players/PlayerCard";
import { useState, useCallback } from "react";
import PLAYERS from "@/seeder/players";

// const imageUrl = `https://resources.premierleague.com/premierleague/photos/players/110x140/${PLAYERS.image}`;
// const imageExists = imageUrl.response == 200;

const Sidebar = () => {
  const [players, setPlayers] = useState([]);
  const handleSearch = useCallback(
    (data) => {
      setPlayers(data);
    },
    [setPlayers]
  );

  //https://resources.premierleague.com/premierleague/photos/players/110x140/p225321.png

  return (
    <div className="w-2/6 bg-slate-600 p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap gap-2 p-2 justify-center">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.first_name + " " + player.last_name}
            position={player.position}
            team={player.team}
            image={`https://resources.premierleague.com/premierleague/photos/players/110x140/${player.image}`}
            onClick={() => {
              console.log(player);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
