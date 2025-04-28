import React from 'react'
import ReactDOM from 'react-dom/client'
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
import FindTutorsPage from './Pages/FindTutorsPage/FindTutorsPage.jsx'
import TutorDetailsPage from './Pages/TutorDetailsPage/TutorDetailsPage.jsx'
import MyBookedTutorsPage from './Pages/MyBookedTutorsPage/MyBookedTutorsPage.jsx'
import TutorCategoryPage from './Pages/TutorCategoryPage/TutorCategoryPage.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import { TutorContextProvider } from './Contexts/TutorContext/TutorContext.jsx'
import DashboardLayout from './Dashboard/DashboardLayout.jsx'
import AddLession from './Dashboard/TutorDashboard/AddLession.jsx'
import MyLessons from './Dashboard/TutorDashboard/MyLessons.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllUsers from './Dashboard/AdminDashboard/AllUsers.jsx'
import { UserContextProvider } from './Contexts/UserContext/UserContext.jsx'
import AllLessons from './Dashboard/AdminDashboard/AllLessons.jsx'
import TutorRequest from './Dashboard/AdminDashboard/TutorRequest.jsx'
import MyBookedLessons from './Dashboard/UserDashboard/MyBookedLessons.jsx'
import BecomeATutor from './Dashboard/UserDashboard/BecomeATutor.jsx'
import UserDashboard from './Dashboard/UserDashboard/UserDashboard.jsx'

const queryClient = new QueryClient()

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: <Registration />
      },
      {
        path: '/add-tutorials',
        element: <PrivateRoute>
          <AddTutorialsPage />
        </PrivateRoute>
      },
      {
        path: '/my-tutorials',
        element: <PrivateRoute>
          <MyTutorialsPage />
        </PrivateRoute>
      },
      {
        path: '/update-tutorial/:id',
        element: <PrivateRoute>
          <UpdatePage />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_MAIN_URL}/tutorials/${params.id}`)
      },
      {
        path: '/find-tutors',
        element: <FindTutorsPage />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_MAIN_URL}/tutors`)
      },
      {
        path: '/tutor-details/:id',
        element: <PrivateRoute>
          <TutorDetailsPage />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_MAIN_URL}/tutor/${params.id}`)
      },
      {
        path: '/my-booked-tutors',
        element: <PrivateRoute>
          <MyBookedTutorsPage />
        </PrivateRoute>
      },
      {
        path: '/find-tutors/:languageName',
        element: <TutorCategoryPage />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_MAIN_URL}/tutors/${params.languageName}`)
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>,
    children: [
      {
        path: 'add-lesson',
        element: <AddLession />
      },
      {
        path: 'my-lessons',
        element: <MyLessons />
      },
      {
        path: 'all-lessons',
        element: <AllLessons />
      },
      {
        path: 'all-users',
        element: <AllUsers />
      },
      {
        path: 'tutor-request',
        element: <TutorRequest/>
      },
      {
       path: 'user-dashboard',
       element: <UserDashboard/> 
      },
      {
        path: 'my-booked-lessons',
        element: <MyBookedLessons/>
      },
      {
        path: 'become-a-tutor',
        element: <BecomeATutor/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <UserContextProvider>
          <TutorContextProvider>
            <RouterProvider router={route} />
          </TutorContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
