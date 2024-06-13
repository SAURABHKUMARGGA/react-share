import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Teams from './component/pages/Teams.jsx'
import Projects from './component/pages/Projects.jsx'
import Calender from './component/pages/Calender.jsx'
import Home from './component/pages/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
define(['IScroll', 'fullpage'], function(IScroll, fullpage) {

  // Initializing it
  var fullPageInstance = new fullpage('#myFullpage', {
      navigation: true,
      sectionsColor:['blue', 'red', 'purple', 'grey'],
      scrollOverflow: true
  });
});
const router = new createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/teams",
        element:<Teams/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/calendar",
        element:<Calender/>
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
