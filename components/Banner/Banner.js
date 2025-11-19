import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import "./banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
       try{
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
        setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length)
            ]);
       } catch (error){
        console.log("error",error);
       }
        
    })()

  }, []);

    function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie
          ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
          : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <p className="banner_description">
          {truncate(movie?.overview, 150)}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
