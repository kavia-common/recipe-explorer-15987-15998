import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import './assets/common.css';

import SignIn from './components/SignIn';
import Filter from './components/Filter';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Sidebar from './components/Sidebar';

// Theme tokens and app-level colors (from requirements)
const THEME_COLORS = {
  accent: '#fbbc05',
  primary: '#34a853',
  secondary: '#fffde7'
};

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Set global CSS variables for custom theme
    document.documentElement.style.setProperty('--color-accent', THEME_COLORS.accent);
    document.documentElement.style.setProperty('--color-primary', THEME_COLORS.primary);
    document.documentElement.style.setProperty('--color-secondary', THEME_COLORS.secondary);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const toggleSidebar = () => {
    setSidebarOpen(open => !open);
  };

  return (
    <div className="app-root">
      <header className="app-header-nav">
        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}>
          ☰
        </button>
        <Link to="/" className="brand-title">Recipe Explorer</Link>
        <nav className="nav-links">
          <Link to="/filter" className="nav-link">Filter</Link>
          <Link to="/signin" className="nav-link">Sign In</Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </header>
      <div className="app-content-layout">
        <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
        <main className="main-content" role="main">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/filter" element={<Filter />} />
          </Routes>
        </main>
      </div>
      <footer className="app-footer">© {new Date().getFullYear()} Recipe Explorer</footer>
    </div>
  );
}

export default App;
