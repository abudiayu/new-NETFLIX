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

  // Scroll function for buttons
  const scrollRow = (distance) => {
    if (postersRef.current) {
      postersRef.current.scrollLeft += distance;
    }
  };

  // Handle trailer click
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    movieTrailer(movie?.name || movie?.title || movie?.original_name)
      .then((url) => {
        if (!url) return console.log("Trailer not found");
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log("Error finding trailer:", error));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* LEFT SCROLL BUTTON */}
      {isLargeRow && (
        <button className="scroll-btn left" onClick={() => scrollRow(-300)}>
          ❮
        </button>
      )}

      {/* POSTERS */}
      <div
        ref={postersRef}
        className={`row__posters ${isLargeRow ? "row__posters--liveflow" : ""}`}
      >
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id + "-" + index}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.name}
          />
        ))}
      </div>

      {/* RIGHT SCROLL BUTTON */}
      {isLargeRow && (
        <button className="scroll-btn right" onClick={() => scrollRow(300)}>
          ❯
        </button>
      )}

      {/* TRAILER */}
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
