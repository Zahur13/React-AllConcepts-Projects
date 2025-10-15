import { Bookmark, Briefcase, Clock4, MapPin, Star } from "lucide-react";

const JobDetails = () => {
  return (
    <div className="w-[80%] m-10  ">
      <div className="flex-col items-center justify-between border-2 border-gray-300 py-4 rounded-[40px] gap-5">
        <div className="text-[24px] font-bold flex items-center justify-center gap-5 p-5">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/design.png"
            alt=""
            className="w-[60px] h-[60px] border-2 rounded-lg text-[24px] flex items-center justify-center"
          />
          <div>
            <h2 className="text-[24px] font-bold">UI/UX Designer</h2>
            <MapPin size={20} />
          </div>
          <Bookmark className=" top-0 right-0 ml-15" />
        </div>
        <div className="text-[24px]  flex-col items-center justify-center gap-5 p-5">
          <h1 className="font-bold">Web Design</h1>
          <div className="text-sm flex items-center justify-center gap-5 text-gray-400">
            <div>
              <Briefcase size={20} />
              Full Time
            </div>
            <div>
              <Clock4 size={20} />
              10 min ago
            </div>
            <div>
              <Star size={20} />
              4.6
            </div>
          </div>
        </div>
        <div className="text-[18px] font-bold flex items-center justify-center gap-5 p-5">
          <h2 className="text-[18px] font-bold">
            $60<span>/hr</span>
          </h2>
          <h2 className="text-[18px] font-bold">Featured</h2>
          <button className="bg-[#1E88E5] text-white text-[18px] font-bold px-4 py-2 rounded-[20px]">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
