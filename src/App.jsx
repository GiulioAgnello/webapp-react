import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "../Layout/defaultLayout";
import HomePage from "../page/homePage";
import movieDetail from "../page/movieDetail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/movie">
              <Route index element={<HomePage />}></Route>
              <Route path="/movie/:id" element={<movieDetail />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
