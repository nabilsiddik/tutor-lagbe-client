import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Registration from './Pages/Registration/registration.jsx'

const route = createBrowserRouter([
  {
      path: '/',
      element: <MainLayout/>,
      children: [
          {
              path: '/',
              element: <Home/>
          },
          {
            path: '/login',
            element: <Login/>
          },
          {
            path: '/registration',
            element: <Registration/>
          }
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route}/>
  </React.StrictMode>,
)
