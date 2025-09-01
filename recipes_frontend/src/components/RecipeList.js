import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/common.css';

// EXAMPLE DATA (to be replaced with backend integration)
const SAMPLE_RECIPES = [
  {
    id: '1',
    title: 'Summer Salad',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=240&fit=crop',
    description: 'A fresh and healthy green salad with a touch of lemon.',
    category: 'Healthy',
    rating: 4
  },
  {
    id: '2',
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1519864600265-abb2389b8293?w=400&h=240&fit=crop',
    description: 'Classic Italian pasta with creamy sauce.',
    category: 'Dinner',
    rating: 5
  },
  {
    id: '3',
    title: 'Vegan Pancakes',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=400&h=240&fit=crop',
    description: 'Fluffy, plant-based pancakes perfect for breakfast.',
    category: 'Breakfast',
    rating: 4
  }
];

// PUBLIC_INTERFACE
function RecipeList() {
  const [search, setSearch] = useState('');

  // PUBLIC_INTERFACE
  const filteredRecipes = SAMPLE_RECIPES.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
    || recipe.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="recipe-list-page">
      <div className="recipes-header">
        <h1>Browse Recipes</h1>
        <form className="recipes-search-form" onSubmit={e => e.preventDefault()}>
          <input
            className="recipes-search-input"
            type="text"
            value={search}
            placeholder="Search for recipes..."
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="recipes-grid">
        {filteredRecipes.length === 0 ? (
          <p className="recipes-empty">No recipes found.</p>
        ) : filteredRecipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img className="recipe-image" src={recipe.image} alt={recipe.title} />
              <div className="recipe-card-body">
                <h2 className="recipe-title">{recipe.title}</h2>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-meta">
                  <span className="recipe-category">{recipe.category}</span>
                  <span className="recipe-rating">{'★'.repeat(recipe.rating)}{'☆'.repeat(5 - recipe.rating)}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
