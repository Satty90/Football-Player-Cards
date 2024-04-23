import Sidebar from "@/components/Sidebar";
import Pitch from "@/components/Pitch";
import SearchBar from "@/components/SearchBar";

const Home = () => {
  return (
    <div className="h-screen flex bg-black">
      <Sidebar>
        <SearchBar />
      </Sidebar>
      <Pitch />
    </div>
  );
};

export default Home;
