import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';

import Protected from './components/Protected';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<App/>}>
      <Route path= '/login' element={<Login/>}/>
      <Route path= '/' element={<Protected/>}>
      <Route path= '/' index element={<Home/>}/>
      </Route>
     
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}
/>);


