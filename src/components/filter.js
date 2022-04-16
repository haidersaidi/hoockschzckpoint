

import { useState, useEffect } from "react";
const SearchMovie = ({ setNameSearch, setRatingSearch, ratingSearch }) => {
  const [text, setText] = useState("");
  //     getter  setter           initial value

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
    setNameSearch(e.target.value);
  };

  useEffect(() => {
    console.log("Search movie component");
  }, []);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          value={text}
          onChange={handleChange}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
