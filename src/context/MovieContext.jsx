import { createContext, useContext } from "react";

const MovieContext = createContext();

// settaggi
const MovieProvider = ({ children }) => {
  const StarGenerator = (param) => {
    Array.from({ length: Math.ceil(param / 2) }).map((_, i) => <>star</>);
  };

  return (
    <MovieContext.Provider value={StarGenerator}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MovieContext);
};

export { MovieProvider, useMovies };
