import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    brand: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { ...product, id: Date.now() }; // Unique ID for the new product
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    savedProducts.push(newProduct);

    // Update localStorage with the new list of products
    localStorage.setItem('products', JSON.stringify(savedProducts));

    // Redirect to the Manage Products page after adding the product
    navigate('/manage-products');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full mb-4 p-2 border"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full mb-4 p-2 border"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full mb-4 p-2 border"
        />
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="w-full mb-4 p-2 border"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full mb-4 p-2 border"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 p-2 border"
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
