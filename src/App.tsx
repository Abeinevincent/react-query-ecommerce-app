import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link, Router, Navigate
} from "react-router-dom";
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Home } from './pages/home/Home';
const user = localStorage.getItem('token')
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "register",
    element: user ? <Navigate replace to='/' /> : <Register />
  },
  {
    path: "login",
    element: user ? <Navigate replace to='/' /> : <Login />
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
