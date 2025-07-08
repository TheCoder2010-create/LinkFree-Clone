import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch, placeholder = "Search by GitHub Username" }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      // Optionally, show a message or handle empty input as needed
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-bar-form">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
        aria-label={placeholder}
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button" aria-label="Search">
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
          alt="Search Icon"
        />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
