import React from 'react';
import '../App.css';
import '../assets/common.css';

// Example categories, later will be fetched from backend
const CATEGORIES = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Vegetarian',
  'Dessert',
  'Healthy',
  'Quick & Easy',
  'Gluten Free',
  'Vegan'
];

// PUBLIC_INTERFACE
function Sidebar({ open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`} aria-label="Recipe category navigation">
      <button className="sidebar-close-btn" onClick={onClose} aria-label="Close sidebar">×</button>
      <h3 className="sidebar-title">Categories</h3>
      <ul className="sidebar-categories">
        {CATEGORIES.map(cat => (
          <li key={cat}>
            <a href={`#category-${cat.toLowerCase().replace(/\s/g, '-')}`} className="sidebar-category-link">{cat}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
