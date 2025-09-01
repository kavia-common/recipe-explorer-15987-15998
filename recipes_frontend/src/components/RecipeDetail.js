import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/common.css';

// Example of recipe details (faked for this demo)
const RECIPE_MAP = {
  '1': {
    title: 'Summer Salad',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=480&fit=crop',
    ingredients: ['Lettuce', 'Cucumber', 'Tomatoes', 'Lemon', 'Olive oil'],
    instructions: 'Mix all ingredients in a large bowl and serve cooled.',
    rating: 4
  },
  '2': {
    title: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1519864600265-abb2389b8293?w=800&h=480&fit=crop',
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Bacon', 'Black pepper'],
    instructions: 'Cook pasta. Mix with eggs, cheese, and bacon. Serve hot.',
    rating: 5
  },
  '3': {
    title: 'Vegan Pancakes',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=800&h=480&fit=crop',
    ingredients: ['Flour', 'Oat milk', 'Banana', 'Baking powder', 'Maple syrup'],
    instructions: 'Mash banana, mix ingredients, cook on skillet, top with syrup.',
    rating: 4
  }
};

// PUBLIC_INTERFACE
function RecipeDetail() {
  const { id } = useParams();
  const recipe = RECIPE_MAP[id];
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="detail-title">{recipe.title}</h1>
      <img className="detail-image" src={recipe.image} alt={recipe.title} />
      <div className="detail-meta">
        <span className="detail-rating">{'★'.repeat(recipe.rating)}{'☆'.repeat(5 - recipe.rating)}</span>
      </div>
      <h2>Ingredients</h2>
      <ul className="detail-ingredients">
        {recipe.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p className="detail-instructions">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
