// src/components/ProductTable.js
import React from 'react';

const ProductTable = ({ products, onDelete, onEdit }) => {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Brand</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">
                <button 
                  onClick={() => onEdit(product.id)} 
                  className="text-blue-600 hover:text-blue-800 mr-3"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(product.id)} 
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
