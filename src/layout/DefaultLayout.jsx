import { Outlet } from "react-router";
import Header from "../components/Header";
import { useLoader } from "../context/LoaderContext";
import Loader from "../components/Loader";

// export
export default function DefaultLayout() {
  const { isLoading } = useLoader();
  return (
    <div>
      <Loader setShow={isLoading} />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
