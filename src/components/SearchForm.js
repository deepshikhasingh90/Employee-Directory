import React from "react";

function SearchForm({ handleSearchEvent }) {
  return (
    <div className="searchbox d-flex justify-content-center">
      <form className="form-inline">
      <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearchEvent}
        />
       
      </form>
    </div>
  );
}
export default SearchForm;