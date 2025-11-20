import React, { useState, useEffect, useRef } from "react";
import axios from "../../../utils/axios.js";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const postersRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  // Duplicate posters for infinite marquee
  const marqueeMovies = [...movies, ...movies];

  // After movies load → calculate width and set CSS variable
  useEffect(() => {
    if (!isLargeRow) return;
    if (!postersRef.current) return;

    const fullWidth = postersRef.current.scrollWidth / 2;
    postersRef.current.style.setProperty("--marqueeWidth", `-${fullWidth}px`);
  }, [movies, isLargeRow]);


const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
    return;
  }

  // Find YouTube trailer using movie-trailer package
  movieTrailer(movie?.name || movie?.title || movie?.original_name)
    .then((url) => {
      if (url) {
        console.log(url)
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams)
        setTrailerUrl(urlParams.get("v")); // Set YouTube video ID
      } else {
        console.log("Trailer not found");
      }
    })
    .catch((error) => {
      console.log("Error finding trailer:", error);
    });
};


const opts = {
  height: '390',
  width: '100%',
  playerVars: { autoplay: 1 }
};

  return (
    <div className="row">
      <h2>{title}</h2>

      <div
        ref={postersRef}
        className={`row__posters ${isLargeRow ? "row__posters--liveflow" : ""}`}
      >
        {marqueeMovies.map((movie, index) => (
          <img
            onClick={()=>handleClick(movie)}
            key={movie.id + "-" + index}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.name}
          />

        ))}
      </div>
      <div style={{padding:"40px"}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts = {opts} />}
      </div>
    </div>
  );
};

export default Row;
