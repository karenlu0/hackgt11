import React, { useState } from 'react';
import GoodsServices from './GoodsServices'; // Import the form to submit items
import './GoodsServicesPage.css'; // Add your custom styles

function GoodsServicesPage() {
  const [filter, setFilter] = useState('goods'); // Default filter is 'goods'
  const [items, setItems] = useState([]); // Array to store submitted items

  // Function to add new item
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="GoodsServicesPage">
      <h2>Goods & Services</h2>
      <div className="filter-container">
        <button onClick={() => setFilter('goods')} className={`filter-button ${filter === 'goods' ? 'active' : ''}`}>
          Goods
        </button>
        <button onClick={() => setFilter('services')} className={`filter-button ${filter === 'services' ? 'active' : ''}`}>
          Services
        </button>
      </div>
      
      <GoodsServices onAddItem={handleAddItem} />

      <h3>{filter.charAt(0).toUpperCase() + filter.slice(1)} Offered</h3>
      <div className="items-list">
        {items
          .filter(item => (filter === 'goods' && item.type === 'goods') || (filter === 'services' && item.type === 'services'))
          .map((item, index) => (
            <div key={index} className="item-card">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              {item.image && <img src={URL.createObjectURL(item.image)} alt={item.name} style={{ maxWidth: '100px' }} />}
            </div>
          ))}
      </div>
    </div>
  );
}

export default GoodsServicesPage;
