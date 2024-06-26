import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";


//   Tranding

export const getMovies = async (page) => {

const url ="https://api.themoviedb.org/3/trending/movie/day"; 
const options = {
  params: {
    page: page,   
  },
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJlMWQ4MDkzYjljOWVhNTdhYTI3YmYzYjM4OWFmYSIsIm5iZiI6MTcxOTQwNDQxNC43NDUxNTEsInN1YiI6IjY2N2JmZGQ0OGU2NjdlZDkxODU1N2E4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yQrUj7hkTEWRhzeNrRyz9eRk2QZM9olHAz48Qq8uscE",
  },
}; 
   try {
     const response = await axios.get(url, options);
    return response.data;
       
   } catch (error) {
     console.error("Error fetching articles:", error);
     throw error;
   }
};

// Search-bar

export const searchMovies = async (searchQuery, page) => {
  try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query: searchQuery,
          page: page,
        },
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJlMWQ4MDkzYjljOWVhNTdhYTI3YmYzYjM4OWFmYSIsIm5iZiI6MTcxOTQwNDQxNC43NDUxNTEsInN1YiI6IjY2N2JmZGQ0OGU2NjdlZDkxODU1N2E4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yQrUj7hkTEWRhzeNrRyz9eRk2QZM9olHAz48Qq8uscE",
        },
      }
    );
      return response.data;
      
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Details

export const movieDetal = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJlMWQ4MDkzYjljOWVhNTdhYTI3YmYzYjM4OWFmYSIsIm5iZiI6MTcxOTQwNDQxNC43NDUxNTEsInN1YiI6IjY2N2JmZGQ0OGU2NjdlZDkxODU1N2E4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yQrUj7hkTEWRhzeNrRyz9eRk2QZM9olHAz48Qq8uscE",
        },
      }
    );
    return response.data;
      
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Actors

export const movieActors = async (id) => {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJlMWQ4MDkzYjljOWVhNTdhYTI3YmYzYjM4OWFmYSIsIm5iZiI6MTcxOTQwNDQxNC43NDUxNTEsInN1YiI6IjY2N2JmZGQ0OGU2NjdlZDkxODU1N2E4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yQrUj7hkTEWRhzeNrRyz9eRk2QZM9olHAz48Qq8uscE",
        },
      }
    );
    return response.data.cast;
      
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Reviews

export const movieReviews = async (id) => {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTJlMWQ4MDkzYjljOWVhNTdhYTI3YmYzYjM4OWFmYSIsIm5iZiI6MTcxOTQwNDQxNC43NDUxNTEsInN1YiI6IjY2N2JmZGQ0OGU2NjdlZDkxODU1N2E4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yQrUj7hkTEWRhzeNrRyz9eRk2QZM9olHAz48Qq8uscE",
        },
      }
    );
    return response.data.results;
  
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};