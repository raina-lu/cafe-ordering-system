import './App.css';
import React, { useState } from 'react';
import './CafeMenu.css';

const CafeMenu = () => {
  const [order, setOrder] = useState({
    coffee: 0,
    tea: 0,
    milk: 0,
    coke: 0,
    beer: 0
  });

  const menuItems = [
    { id: 'coffee', name: 'Coffee', price: 480 },
    { id: 'tea', name: 'Tea', price: 280 },
    { id: 'milk', name: 'Milk', price: 180 },
    { id: 'coke', name: 'Coke', price: 190 },
    { id: 'beer', name: 'Beer', price: 580 },
  ];

  const handlePurchase = (id) => {
    setOrder(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  const totalItems = Object.values(order).reduce((sum, count) => sum + count, 0);
  const totalPrice = menuItems.reduce((sum, item) => sum + (order[item.id] * item.price), 0);

  return (
    <div className="cafe-menu">
      <div className="menu-items">
        {menuItems.map(item => (
          <button
            key={item.id}
            className="menu-item"
            onClick={() => handlePurchase(item.id)}
          >
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price} yen</span>
            {order[item.id] > 0 && <span className="item-count">{order[item.id]}</span>}
          </button>
        ))}
      </div>
      <div className="bill">
        <h2>Your bill</h2>
        <p>Items ordered : {totalItems}</p>
        <p>Total Price : {totalPrice} yen</p>
      </div>
    </div>
  );
};

export default CafeMenu;