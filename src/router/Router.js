import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Protected from './Protected'
import PageNotFound from '../pages/PageNotFound'

function RoutesApp () {
  const Router = useRoutes([
    { path: '/', 
      element: <Protected><Home/></Protected>
    },
    {
      path: '/login',
      element: <Login/>
    },  
    {
      path: '*',
      element: <PageNotFound/>
    }
  ])
  return Router
}

export default RoutesApp;