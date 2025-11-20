import React from 'react';
import requests from '../../../utils/request';
import Row from '../Row/Row';

const RowList = () => {
  return (
    <>
      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row 
        title="Trending"
        fetchUrl={requests.fetchTrending}
      />

      <Row 
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />

      <Row 
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row 
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row 
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Row 
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
