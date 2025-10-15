const Categories = () => {
  const categories = [
    "All",
    "UI/UX",
    "Web Design",
    "Web Development",
    "Mobile App",
  ];
  return (
    <div className=" py-4">
      <div className="flex items-center justify-center gap-4 cursor-pointer">
        {categories.map((category, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "text-[16px] text-black font-bold"
                : "text-[16px] text-gray-400 font-bold"
            }
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
