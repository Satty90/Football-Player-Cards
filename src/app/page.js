import Sidebar from "@/components/Sidebar";
import Pitch from "@/components/Pitch";
import SearchBar from "@/components/SearchBar";
import PlayerCard from "@/components/Players/PlayerCard";

const Home = () => {
  return (
    <div className="h-screen flex bg-black">
      <Sidebar />
      <Pitch>
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="https://resources.premierleague.com/premierleague/photos/players/250x250/p172780.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="https://resources.premierleague.com/premierleague/photos/players/250x250/p184254.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="https://resources.premierleague.com/premierleague/photos/players/110x140/Photo-Missing.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
        <PlayerCard
          name="Son"
          position="#7/Forward"
          team="Tottenham"
          image="/images/p85971.png"
        />
      </Pitch>
    </div>
  );
};

export default Home;
