import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './reduxToolkit/store';
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Workspace/Home/Home";
import { Route, Routes } from "react-router-dom";
import AppRouter from './routes/components/Router';

function App() {
  return (
    <BrowserRouter>
       {/* <Routes>
      <Route
        path="/"
        element={<Home/>}
        />
         </Routes> */}
      {/* <Provider store={store}> */}
      <AppRouter/>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
