import React from "react";
import "./search-panel.css";

const SearchPanel = ({ onSymbolTyping, defaultSearchText }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={(e) => onSymbolTyping(e.target.value)}
    />
  );
};

export default SearchPanel;
