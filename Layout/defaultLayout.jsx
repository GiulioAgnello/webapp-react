import { Outlet } from "react-router";
import Header from "../src/components/Header";

// export
export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
