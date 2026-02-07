import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/item/find"
        );
        console.log("API response",response.data);
        setItem(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

 return (
  <div className="px-6 sm:px-10 py-12 bg-gray-50 min-h-screen">
  <h2 className="text-3xl font-bold mb-8 text-gray-800">
    Products
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
    {item.map((i) => (
      <div
        key={i.productid}
        className="group bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
      >
        {/* Image */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          <img
            src={i.image}
            alt={i.productname}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
            {i.productname}
          </h3>

          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {i.description}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-4">
            <p className="text-lg font-bold text-indigo-700">
              ₹{i.price}
            </p>

            <Link to={`/product/${i.productid}`}>
              <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-xl transition active:scale-95">
                View Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

);
};
export default Product;

