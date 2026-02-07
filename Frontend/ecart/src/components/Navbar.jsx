import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/category/find"
        );
        setCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
   
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-xl">
  <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
      {/* Brand */}
        <NavLink to="/" className="text-xl font-bold flex items-center gap-2">
          Shopping Online 🛒
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Categories */}
          {category.map((cat) => (
            <NavLink
              key={cat._id}
              to={`/category/${cat._id}`}
              className=" px-4 py-2
  rounded-full
  font-semibold
  tracking-wide
  hover:bg-yellow-400
  hover:text-black
  transition"
            >
              {cat.categoryname}
            </NavLink>
          ))}
          
          {/* Right side */}
          <NavLink to="/vendor" className="hover:text-yellow-400">
            Vendor
          </NavLink>
          <NavLink to="/user" className="hover:text-yellow-400">
            User
          </NavLink>
          <NavLink to="/login" className="hover:text-yellow-400">
            Login
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden mt-4 flex flex-col gap-3 transition-all duration-300 ${
    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          {category.map((cat) => (
            <NavLink
              key={cat._id}
              to={`/category/${cat._id}`}
              className="hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              {cat.categoryname}
            </NavLink>
          ))}

          <NavLink to="/vendor">Vendor</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


