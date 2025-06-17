import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "../Layout/defaultLayout";
import HomePage from "../page/homePage";
import MovieDetail from "../page/movieDetail";

export default function App() {
  return (
    <>
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
    </>
  );
}
