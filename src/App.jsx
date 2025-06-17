import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "../Layout/defaultLayout";
import HomePage from "../page/homePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/">
              <Route index element={<HomePage />}></Route>
              {/* <Route path=":id" element={<movieDetail />}></Route> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
