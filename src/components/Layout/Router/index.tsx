import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages';
import Error from '@/pages/error';
import Login from '@/pages/Login';
import { PageWithoutLayout } from '@/routes/ExceptionRoutes';

import Layout from '..';

const AppRouter = () => {
    const pathname = window.location.pathname;
    const acceptedRoutes = router.routes.map((route) => route.path);

    const LayoutFragment =
        !acceptedRoutes.includes(pathname) || PageWithoutLayout.includes(pathname) ? React.Fragment : Layout;

    return (
        <LayoutFragment>
            <RouterProvider router={router} />
        </LayoutFragment>
    );
};

const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <Error /> },
    { path: '/login', element: <Login /> },
]);

export default AppRouter;
