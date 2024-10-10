import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavString from "../constants/NavStrings";
// import HomePage from "./../../components/Workspace/Home/Home";

const HomePage = lazy(() => import("./../../components/Workspace/Home/Home"));

const AppRouter = () => {

    return (
        <Routes>
      <Route
        path={NavString.HOME}
        element={<HomePage/>}
        />
         </Routes>)
   
}

export default AppRouter;