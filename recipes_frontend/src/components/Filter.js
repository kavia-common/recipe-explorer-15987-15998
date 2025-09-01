import React from 'react';
import '../assets/filter-231-1984.css';
import '../assets/common.css';

// PUBLIC_INTERFACE
function Filter() {
  return (
    <main className="artboard" role="main" aria-label="Filter screen">
      <section className="filter-screen">
        <div className="panel" aria-hidden="true"></div>
        <header className="header">
          <h1 className="title">Filter Search</h1>
        </header>
        <section className="group time-sort" aria-label="Sort by time">
          <h2 className="section-title visually-hidden">Sort</h2>
          <div className="chips" role="tablist" aria-label="Time sort options">
            <button className="chip chip-outline" role="tab" aria-selected="true" data-chip-group="sort" data-value="all">All</button>
            <button className="chip chip-filled" role="tab" aria-selected="false" data-chip-group="sort" data-value="newest">Newest</button>
            <button className="chip chip-outline" role="tab" aria-selected="false" data-chip-group="sort" data-value="oldest">Oldest</button>
            <button className="chip chip-outline" role="tab" aria-selected="false" data-chip-group="sort" data-value="popularity">Popularity</button>
          </div>
        </section>
        <section className="group rate" aria-label="Filter by rating">
          <h2 className="section-title">Rate</h2>
          <div className="chips" role="group" aria-label="Rating">
            <button className="chip chip-outline" data-chip-group="rate" data-value="5">
              <span className="chip-text">5</span>
              <span className="star star-solid" aria-hidden="true"></span>
            </button>
            <button className="chip chip-filled" aria-pressed="true" data-chip-group="rate" data-value="4">
              <span className="chip-text text-on-filled">4</span>
              <span className="star star-outline" aria-hidden="true"></span>
            </button>
            <button className="chip chip-outline" data-chip-group="rate" data-value="3">
              <span className="chip-text">3</span>
              <span className="star star-solid" aria-hidden="true"></span>
            </button>
            <button className="chip chip-outline" data-chip-group="rate" data-value="2">
              <span className="chip-text">2</span>
              <span className="star star-solid" aria-hidden="true"></span>
            </button>
            <button className="chip chip-outline" data-chip-group="rate" data-value="1">
              <span className="chip-text">1</span>
              <span className="star star-solid" aria-hidden="true"></span>
            </button>
          </div>
        </section>
        <section className="group category" aria-label="Filter by category">
          <h2 className="section-title">Category</h2>
          <div className="chips" role="group" aria-label="Category options">
            <button className="chip chip-outline" data-chip-group="category" data-value="all">All</button>
            <button className="chip chip-outline" data-chip-group="category" data-value="cereal">Cereal</button>
            <button className="chip chip-outline" data-chip-group="category" data-value="vegetables">Vegetables</button>
            <button className="chip chip-outline" data-chip-group="category" data-value="chinese-1">Chinese</button>
            <button className="chip chip-filled" data-chip-group="category" data-value="local-dish">
              <span className="text-on-filled">Local Dish</span>
            </button>
            <button className="chip chip-outline" data-chip-group="category" data-value="fruit">Fruit</button>
            <button className="chip chip-outline" data-chip-group="category" data-value="breakfast">BreakFast</button>
            <button className="chip chip-outline" data-chip-group="category" data-value="spanish">Spanish</button>
            <button className="chip chip-outline" data-chip-group="category" data-value="chinese-2">Chinese</button>
            <button className="chip chip-outline chip-with-star" data-chip-group="category" data-value="dinner">
              <span>Dinner</span>
              <span className="star star-solid" aria-hidden="true"></span>
            </button>
          </div>
        </section>
        <div className="actions">
          <button className="btn-primary" type="button" id="apply-filters">
            <span className="label">Filter</span>
          </button>
        </div>
        <div className="home-indicator" aria-hidden="true">
          <div className="bar"></div>
        </div>
      </section>
    </main>
  );
}

export default Filter;
