import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
      <h2 className="text-xl font-semibold mb-6">Sidebar</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="block p-2">Manage Products</Link>
        </li>
        <li>
          <Link to="/" className="block p-2">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
