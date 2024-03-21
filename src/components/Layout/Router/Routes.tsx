import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Error = lazy(() => import('@/pages/error'));
const Home = lazy(() => import('@/pages/index'));
const Login = lazy(() => import('@/pages/Login'));

export const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <Error /> },
    { path: '/login', element: <Login /> },
]);
