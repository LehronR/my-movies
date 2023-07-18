import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import Movies from "./Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const nameRef = useRef();
  const descRef = useRef();
  const yearRef = useRef();
  const genreRef = useRef();

  function addMovie() {
    console.log("got button click");
    let currentNameText = nameRef.current.value || undefined;
    let currentDescText = descRef.current.value || undefined;
    let currentYearText = yearRef.current.value || undefined;
    let currentGenreText = genreRef.current.value || undefined;

    setMovies([
      ...movies,
      {
        id: Date.now(),
        name: currentNameText,
        desc: currentDescText,
        year: currentYearText,
        genre: currentGenreText
      }
    ]);

    nameRef.current.value = "";
    descRef.current.value = "";
    yearRef.current.value = "";
    genreRef.current.value = "";
  }

  function removeMovie(id) {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  }
  // let movieCollection = [
  // 	{
  // 		name: 'Batman',
  // 		desc: 'Dark Knight',
  // 		year: '2000',
  // 		genre: 'action',
  // 	},
  // 	{
  // 		name: 'Superman',
  // 		desc: 'Man of Steel',
  // 		year: '20010',
  // 		genre: 'action',
  // 	},
  // ];

  return (
    <>
      <div className='container-fluid board mt-3'>
        <div className='row text-center'>
          <h1>Movie List:</h1>
          <span>Create your Movie Collection here!</span>
        </div>
        <div className='row justify-content-center text-center'>
          {movies.map((movie) => {
            return (
              <Movies
                key={movie.id}
                name={movie.name}
                desc={movie.desc}
                year={movie.year}
                genre={movie.genre}
                removeMovie={() => removeMovie(movie.id)}
              />
            );
          })}
        </div>
        <div className='row mt-3 d-flex justify-content-center'>
          <div className='col-md-9 '>
            <div className='input-group m-3'>
              <input
                type='text'
                ref={nameRef}
                className='form-control m-1'
                placeholder='Title'
                aria-label='Movie Title'
              />
              <input
                type='text'
                ref={descRef}
                className='form-control m-1'
                placeholder='Description'
                aria-label='Movie Description'
              />
              <input
                type='text'
                ref={yearRef}
                className='form-control m-1'
                placeholder='Release Year'
                aria-label='Movie Release Year'
              />
              <input
                type='text'
                ref={genreRef}
                className='form-control m-1'
                placeholder='Genre'
                aria-label='Movie Genre'
              />
              <div className='container mt-3 d-flex justify-content-center'>
                <button
                  onClick={addMovie}
                  className='btn btn-primary h-100 m-0'
                  type='button'
                >
                  Add Movie
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
