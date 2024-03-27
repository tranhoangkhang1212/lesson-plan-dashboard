import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Error = lazy(() => import('@/pages/Error'));
const Home = lazy(() => import('@/pages/index'));
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const TrainingPrograms = lazy(() => import('@/pages/TrainingPrograms'));
const CustomerManagement = lazy(() => import('@/pages/CustomerManagement'));
const TrainerManagement = lazy(() => import('@/pages/CustomerManagement'));
const StaffManagement = lazy(() => import('@/pages/StaffManagement'));

export const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <Error /> },
    { path: '/login', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/training-programs', element: <TrainingPrograms /> },
    { path: '/customer-management', element: <CustomerManagement /> },
    { path: '/trainer-management', element: <TrainerManagement /> },
    { path: '/staff-management', element: <StaffManagement /> },
]);
