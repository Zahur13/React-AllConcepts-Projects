import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className="w-92 h-100 flex justify-between flex-col  border-2 p-8 rounded-4xl bg-white">
      <div className="top flex justify-between items-center w-full  ">
        <img
          className="w-12 h-12 rounded-full border-2 border-gray-300 p-1 object-cover"
          src={props.companyLogo}
          alt=""
        />
        <button className="flex gap-2 bg-white-100 border-2 text-gray-500 border-gray-300 px-2 py-1 rounded-md">
          Save <Bookmark color="gray" />
        </button>
      </div>
      <div>
        <h3 className="text-md font-bold flex items-center gap-2">
          {props.company}
          <span className="text-gray-500 py-3"> 5 days ago</span>
        </h3>
        <h4 className="text-2xl font-bold">{props.role}</h4>
        <div className="py-3 flex gap-2">
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            {props.tag1}
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            {props.tag2}
          </button>
        </div>
      </div>
      <div className="bottom border-t-2  border-gray-300 py-5 flex justify-between items-center w-full">
        <div className="left">
          <h2 className="text-md font-bold">{props.salary}</h2>
          <p className="text-sm text-gray-500">{props.location}</p>
        </div>
        <div className="right">
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={() => {
              alert("This is Demo only");
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
