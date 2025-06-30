import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold">Task Manager</h1>
    <Link to="/create" className="bg-white text-green-600 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100">
      + New Task
    </Link>
  </header>
);

export default Header;
