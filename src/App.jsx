import "bootstrap/dist/css/bootstrap.min.css";
import Movies from './Movies';
import { useState, useRef } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const nameRef = useRef();

 
  function addMovie() {
    console.log('got button click');
    let currentNameText = nameRef.current.value || undefined;
    setMovies([...movies, { name: currentNameText, desc: "description", year: "year", genre: "genre"}]);
  }


  let movieCollection = [
    {
      name: "Batman",
      desc: "Dark Knight",
      year: "2000",
      genre: "action"
    },
    {
      name: "Superman",
      desc: "Man of Steel",
      year: "20010",
      genre: "action"
    }
  ];

  return (
    <>
      <div className="container board mt-3">
        <div className="row text-center">
          <h1>Movies List:</h1>
        </div>
        <div className="row justify-center text-center">
          {
            movieCollection.map((movie, index) => {
              return (
                <Movies
                    key= {index} 
                    name= {movie.name}
                    desc= {movie.desc} 
                    year= {movie.year} 
                    genre= {movie.genre} 
                  />
              )
            })
          }

        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-6 ">
            <div className="input-group mb-3">
              <input
                type="text"
                ref= {nameRef}
                className="form-control"
                placeholder="Movie title here..."
                aria-label="Movie Title"
              />
              <div className="input-group-append">
                <button
                  onClick={addMovie}
                  className="btn btn-primary h-100 m-0"
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
