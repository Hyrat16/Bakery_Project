import { Header } from "../../shared/components/header";
import sytles from "./index.module.css";
import { Outlet } from "react-router-dom";

export const MainLoyout = () => {
  return (
    <>
      <Header />
      <div className={sytles.main}>
        <Outlet />
      </div>
    </>
  );
};
