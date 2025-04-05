const Categories = () => {
  const categories = [
    { name: "Men's Clothing", img: "/images/mensCategory.png" },
    { name: "Women's Clothing", img: "/images/womenCategory.png" },
    { name: "Kids' Wear", img: "/images/kidsCategory.png" },
    { name: "Shoes", img: "/images/shooesCategory.png" },
    { name: "Watches", img: "/images/watchesCategory.png" },
    { name: "Beauty Products", img: "/images/beautyproductCategory.png" },
  ];

  return (
    <div className="w-[90%] mx-auto mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-24 h-24 object-contain"
            />
            <p className="mt-2 text-gray-700 text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
