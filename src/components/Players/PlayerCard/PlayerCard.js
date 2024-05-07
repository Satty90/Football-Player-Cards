"use client";

import Image from "next/image";

const PlayerCard = ({ name, position, team, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col  shadow-sm  rounded-lg w-36 overflow-hidden"
    >
      <div className="bg-neutral-800 flex justify-center rounded-t-lg">
        <Image src={image} alt={"Image of " + name} width={138} height={148} />
      </div>
      <div className="bg-teal-700 p-2 text-center rounded-b-lg">
        <h2 className="font-semibold">{name}</h2>
        <p className="font-bold text-white">{position}</p>
        <p>{team}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
