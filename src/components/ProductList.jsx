import NewArrivals from "./NewArrivals.jsx";


const big_list =[
  {
    heading: "Our New Arrivals",
    products :[
      { id: 1, img: "/images/sneakers.png", name: "Sneakers", price: "Rs 22460" },
      {
        id: 2,
        img: "/images/luxurywatch.png",
        name: "Luxury Watch",
        price: "Rs 70020",
      },
      {
        id: 3,
        img: "/images/bag.png",
        name: "Leather Handbag",
        price: "Rs 3000",
      },
      {
        id: 4,
        img: "/images/letherjackets.png",
        name: "Leather Jackets",
        price: "Rs 7890",
      },
      {
        id: 5,
        img: "/images/letherbelts.png",
        name: "Leather Belts",
        price: "Rs 990",
      },
      {
        id: 6,
        img: "/images/luxuryperfume.png",
        name: "Luxury Perfume",
        price: "Rs 20000",
      },
      { id: 7, img: "/images/shirt.png", name: "Men's Shirt", price: "Rs 3000" },
      {
        id: 8,
        img: "/images/dress.png",
        name: "Women's Dress",
        price: "Rs 4445",
      },
    ]
  },
  {
    heading: "Trending",
    products :[
      { id: 1, img: "/images/sneakers.png", name: "Sneakers", price: "Rs 22460" },
      {
        id: 2,
        img: "/images/luxurywatch.png",
        name: "Luxury Watch",
        price: "Rs 70020",
      },
      {
        id: 3,
        img: "/images/bag.png",
        name: "Leather Handbag",
        price: "Rs 3000",
      },
      {
        id: 4,
        img: "/images/letherjackets.png",
        name: "Leather Jackets",
        price: "Rs 7890",
      },
      {
        id: 5,
        img: "/images/letherbelts.png",
        name: "Leather Belts",
        price: "Rs 990",
      },
      {
        id: 6,
        img: "/images/luxuryperfume.png",
        name: "Luxury Perfume",
        price: "Rs 20000",
      },
      { id: 7, img: "/images/shirt.png", name: "Men's Shirt", price: "Rs 3000" },
      {
        id: 8,
        img: "/images/dress.png",
        name: "Women's Dress",
        price: "Rs 4445",
      },
    ]
  }
]

const ProductList = () => {
  return (
    <>
      {big_list?.map((item, index) => (
        <NewArrivals key={index} heading={item.heading} products={item.products} />
      ))}
    </>
  );
};
export default ProductList;