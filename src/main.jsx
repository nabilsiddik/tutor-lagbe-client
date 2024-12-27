import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import AuthContextProvider from './Contexts/AuthContext/AuthContext.jsx'
import AddTutorialsPage from './Pages/AddTutorialsPage/AddTutorialsPage.jsx'
import Registration from './Pages/Registration/Registration.jsx'
import PrivateRoute from './Routes/PrivateRoute.jsx'
import MyTutorialsPage from './Pages/MyTutorialsPage/MyTutorialsPage.jsx'
import UpdatePage from './Pages/UpdatePage/UpdatePage.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration/>
      },
      {
        path: '/add-tutorials',
        element: <PrivateRoute>
          <AddTutorialsPage/>
        </PrivateRoute>
      },
      {
        path: '/my-tutorials',
        element: <PrivateRoute>
          <MyTutorialsPage/>
        </PrivateRoute>
      },
      {
        path: '/update-tutorial/:id',
        element: <PrivateRoute>
          <UpdatePage/>
        </PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_MAIN_URL}/tutorials/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={route} />
    </AuthContextProvider>
  </React.StrictMode>,
)
