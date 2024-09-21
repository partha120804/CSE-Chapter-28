import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import Home from './Components/Home/home.jsx'
import Gallery from './Components/Gallery/Gallery.jsx';
import Batches from './Components/Batches/Batches.jsx';
import Login from './Components/Login/Login.jsx';
import About from './Components/About/About.jsx';
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Gallery' element={<Gallery/>}/>
      <Route path='Batches' element={<Batches/>}/>
      <Route path='About'  element={<About/>}/>
      <Route path='Login' element={<Login/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router } />
  </StrictMode>,
)
