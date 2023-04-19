import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import React, { useState } from 'react';


/** import all components */
import Username from './component/Username';
import Password from './component/Password';
import Register from './component/Register';
import Profile from './component/Profile';
import Recovery from './component/Recovery';
import Reset from './component/Reset';
import PageNotFound from './component/PageNotFound';

import Home from './component/Home';
import Navbar from './component/navbar';
import Blog from './component/Blog.js';
import FindJob from './component/FindJob';
import About from './component/AboutUs';
import ContactUs from './component/ContactUs';





/** auth middleware */
// import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/sign_up',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <Password />
    },
    {
        path : '/profile',
        element : <Profile />
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    ,
    {
        path : '/',
        element : <Home></Home>
    }
    ,
    {
        path : '/navbar',
        element : <Navbar></Navbar>
    },
    {
        path : '/Blog',
        element : <Blog></Blog>
    },

    {
        path : '/AboutUs',
        element : <About ></About>
    },
    {
        path : '/Home',
        element : <Home ></Home>
    },

    {
        path : '/ContactUs',
        element : <ContactUs></ContactUs>
    },
    {
        path : '/FindJob',
        element : <FindJob></FindJob>
    },
   
  
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
]);


export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>

       
  

    </main>
  )
}