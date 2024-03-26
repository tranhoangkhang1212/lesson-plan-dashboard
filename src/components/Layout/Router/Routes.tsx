import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Error = lazy(() => import('@/pages/Error'));
const Home = lazy(() => import('@/pages/index'));
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

export const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <Error /> },
    { path: '/login', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
]);
