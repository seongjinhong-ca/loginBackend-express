import './App.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route, Link} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
//layouts
import RootLayouts from './layouts/RootLayouts';
import { LoginPage } from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts/>}>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
    </Route>
  )
)


function App() {
  return (
    <div className="App">
      <p>just for the test</p>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
