import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavString from "../constants/NavStrings";

const HomePage = lazy(() => import("./../../components/Workspace/Home/Home"));
const LoginPage = lazy(() => import("./../../components/LoginComponent/LoginPage"));
const NewsLetterPage = lazy(() => import("./../../components/NewsLetter/NewsLetter"));
const SolutionSets = lazy(() => import("./../../components/SolutionSets/SolutionSets"));
const SolutionPage = lazy(() => import("./../../components/Workspace/SolutionPage/SolutionPage"));
const CategoriesPage = lazy(() => import("./../../components/Workspace/CategoriesPage/CategoriesPage"))
const VendorSolutionCenter = lazy(() => import("./../../components/Workspace/VenderSolutionPage/VenderSolution"))

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={NavString.HOME} element={<HomePage />} />
        <Route path={NavString.LOGIN} element={<LoginPage />} />
        <Route path={NavString.NEWLETTER} element={<NewsLetterPage />} />
        <Route path={NavString.SOLUTIONSET} element={<SolutionSets />} />
        <Route path="/publicSolution/:name" element={<SolutionPage />} />
        <Route path="/categories/:name" element={<CategoriesPage />} />
         <Route path="/vendorSolutionCenter/:name" element={<VendorSolutionCenter />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
