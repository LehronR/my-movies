import PropTypes from "prop-types";
import './Movies.css';

function Movies({ name, desc, year, genre }) {
  return (
    <div className="row gy-3">
      <div className="col-md-8 movie m-auto">
        <div className="row pt-3 text-box">
          <p className="text title">{name}</p>
          <p className="text">{desc}</p>
          <p className="text">{year}</p>
          <p className="text">{genre}</p>
        </div>
        <div className="row">
          <div className="col-md-2 p-0">
            <button className="btn btn-danger w-75 px-0 m-0 my-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Movies.defaultProps = {
    text: "Untitled Movie"
}

Movies.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Movies;
