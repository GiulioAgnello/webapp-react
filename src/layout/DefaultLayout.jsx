import { Outlet } from "react-router";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useLoader } from "../context/LoaderContext";

// export
export default function DefaultLayout() {
  const { isLoading } = useLoader();

  return (
    <>
      <Loader show={isLoading} />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
