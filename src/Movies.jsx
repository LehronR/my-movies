import PropTypes from "prop-types";
import { useState } from "react";
import "./Movies.css";

function Movies({ name, desc, year, genre, key, removeMovie }) {
  // STATE FOR WATCH/UNWATCHED
  const [watch, setWatch] = useState(false);

  return (
    <div className='row gy-3' key={key}>
      <div className='col-md-8 movie m-auto'>
        <div className='row pt-3 text-box'>
          <p className='text title'>{name}</p>
          <p className='text'>{desc}</p>
          <p className='text'>{year}</p>
          <p className='text'>{genre}</p>
        </div>
        <div className='row'>
          <div className='col-md-2 p-0'>
            <button
              className='btn btn-danger w-75 px-0 m-0 my-1'
              onClick={removeMovie}
            >
              Delete
            </button>
          </div>
          <div className='col-md-2 p-0'>
            <button
              className={
                watch
                  ? "btn w-75 px-0 m-0 my-1 btn-success"
                  : "btn w-75 px-0 m-0 my-1 btn-danger"
              }
              onClick={() => setWatch(!watch)}
            >
              {watch ? "Watched" : "Unwatched"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Movies.defaultProps = {
  text: "Untitled Movie"
};

Movies.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  removeMovie: PropTypes.isRequired
};

export default Movies;
