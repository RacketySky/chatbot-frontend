import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Chat } from '../pages/Chat'
import { Singin } from '../pages/SingIn';


export function Rotas() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/chat',
            element: <Chat />
        },
        {
            path: 'singin',
            element: <Singin />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}