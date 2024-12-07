import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductTable from '../components/ProductTable';

const ManageProducts = () => {
  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);

  // Load products from localStorage when the component mounts
  useEffect(() => {
    // Fetch products from localStorage
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []); // Empty dependency array ensures this runs only once after the first render

  // Handle deleting a product
  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Handle navigating to the Add/Edit product page
  const handleAddProduct = () => {
    navigate('/add-product');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

          {products.length === 0 ? (
            <div className="text-center">
              <p>No products available.</p>
              <button
                onClick={handleAddProduct}
                className="mt-4 bg-blue-500 text-white p-2 rounded"
              >
                Add Product
              </button>
            </div>
          ) : (
            <ProductTable 
              products={products} 
              onDelete={handleDeleteProduct} 
              onEdit={(id) => navigate(`/edit-product/${id}`)} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
