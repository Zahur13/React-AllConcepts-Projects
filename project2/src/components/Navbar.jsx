import { Search, SlidersVertical, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-[300px] p-10 flex flex-col   gap-20  text-white text-3xl bg-[url('https://plus.unsplash.com/premium_photo-1686644273611-ba8aa4774b50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900')]">
      <div className="nav w-full flex items-center justify-between">
        <Menu size={30} />
        <h3 className="text-2xl font-bold">Search</h3>
        <SlidersVertical size={30} />
      </div>
      <div className="searchbar w-full gap-5 flex border-2 text-black border-gray-300 p-5 rounded-full">
        <input
          item="checkbox"
          placeholder="New York"
          className="bg-gray-300 text-black border-2 outline-none text-[16px] w-1/3 rounded-full p-2"
        />
        <div className="search flex items-center justify-center rounded-full bg-gray-300">
          <input
            item="text"
            placeholder="UI UX Designer"
            className=" w-3/4 text-[16px] text-black outline-none p-2 "
          />
          <Search size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
