import React, { useState } from 'react';
import './GoodsServices.css';

function GoodsServices({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [itemType, setItemType] = useState('goods'); // Default item type

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      image: itemImage,
      type: itemType, // Include the item type
    };

    // Notify parent component of the new item
    onAddItem(newItem);

    // Reset form fields
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemImage(null);
    setItemType('goods');
  };

  return (
    <div className="GoodsServices">
      <h2>Upload Item</h2>
      <form className="GoodsServices-form" onSubmit={handleSubmit}>
        <div className="GoodsServices-input-group">
          <label htmlFor="itemName" className="GoodsServices-label">Item Name</label>
          <input
            type="text"
            id="itemName"
            className="GoodsServices-input"
            placeholder="Enter item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="GoodsServices-input-group">
          <label htmlFor="itemDescription" className="GoodsServices-label">Description</label>
          <input
            type="text"
            id="itemDescription"
            className="GoodsServices-input"
            placeholder="Enter item description"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </div>
        <div className="GoodsServices-input-group">
          <label htmlFor="itemPrice" className="GoodsServices-label">Price</label>
          <input
            type="number"
            id="itemPrice"
            className="GoodsServices-input"
            placeholder="Enter item price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <div className="GoodsServices-input-group">
          <label htmlFor="itemType" className="GoodsServices-label">Type</label>
          <select
            id="itemType"
            className="GoodsServices-input"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
          >
            <option value="goods">Goods</option>
            <option value="services">Services</option>
          </select>
        </div>
        <div className="GoodsServices-input-group">
          <label htmlFor="itemImage" className="GoodsServices-label">Upload Image</label>
          <input
            type="file"
            id="itemImage"
            className="GoodsServices-input"
            onChange={(e) => setItemImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="GoodsServices-button">Submit Item</button>
      </form>
    </div>
  );
}

export default GoodsServices;
