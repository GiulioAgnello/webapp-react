import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./page/HomePage";
import MovieDetail from "./page/MovieDetail";
import { LoaderProvider } from "./context/LoaderContext";

export default function App() {
  return (
    <>
      <LoaderProvider>
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
      </LoaderProvider>
    </>
  );
}
