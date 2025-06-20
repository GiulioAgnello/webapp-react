import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

// settaggi
const LoaderProvider = ({ children }) => {
  // Loader
  const [isLoading, setIsLoading] = useState(false);

  const loaderData = { isLoading, setIsLoading };
  return (
    <LoaderContext.Provider value={loaderData}>
      {children}
    </LoaderContext.Provider>
  );
};
const useLoader = () => useContext(LoaderContext);

export { LoaderProvider, useLoader };
