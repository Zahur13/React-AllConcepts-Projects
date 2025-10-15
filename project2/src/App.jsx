import { SlidersVertical } from "lucide-react";
import { Menu } from "lucide-react";

const App = () => {
  return (
    <div className="w-full h-[300px] p-10 bg-black flex flex-col   gap-20  text-white text-3xl">
      <div className="nav w-full flex items-center justify-between">
        <Menu size={30} />
        <h3 className="text-2xl font-bold">Search</h3>
        <SlidersVertical size={30} />
      </div>
      <div className="searchbar w-full gap-5 flex border-2 border-gray-300 p-5 rounded-full">
        <input
          item="checkbox"
          placeholder="New York"
          className="bg-gray-300 border-2 text-[20px] w-1/3 rounded-full p-2"
        />
        <input
          item="text"
          placeholder="UI UX Designer"
          className="bg-gray-300 w-3/4 text-[20px] p-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default App;
