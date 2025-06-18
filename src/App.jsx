import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./page/HomePage";
import MovieDetail from "./page/MovieDetail";
import { MovieProvider } from "./context/MovieContext";

export default function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/movies">
                <Route index element={<HomePage />}></Route>
                <Route path=":id" element={<MovieDetail />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}
