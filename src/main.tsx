     

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './component/layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './pages/User/user/View';
import UserCreate from './pages/User/user/usercreate';
import UserUpdate from './pages/User/user/userupdate';
import AccountCreate from './pages/User/account/accountcreate';
import AccountUpdate from './pages/User/account/accountupdate';
import SubjectCreate from './pages/Subjects/subjectcreate';
import SubjectUpdate from './pages/Subjects/subjectupdate';
import Subject from './pages/Subjects/subject';
import Account from './pages/User/account/account';
import Grade from './pages/User/user/grades/grade';
import GradeCreate from './pages/User/user/grades/gradecreate';
import GradeUpdate from './pages/User/user/grades/gradeupdate';
const router = createBrowserRouter([
  {
    path: '/login', 
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: 'dashboard', 
        element: <Dashboard />,
      },
      {
       path: 'user',
       element: <User />,
      },
      {
        path: 'user/create', 
        element: <UserCreate />,
      },
      {
        path: 'account/create', 
        element: <AccountCreate />,
      },
      {
        path: 'account/update/:id', 
        element: <AccountUpdate />,
      },
      {
        path: 'user/update/:id', 
        element: <UserUpdate />,
      },

      {
        path: 'subject', 
        element: <Subject />,
      },
      {
        path: 'subject/create', 
        element: <SubjectCreate />,
      },
      {
        path: 'subject/update/:id', 
        element: <SubjectUpdate />,
      },
      {
        path: 'account', 
        element: <Account />,
      },
      {
        path: 'account/update/:id', 
        element: <UserUpdate />,
      },
      {
        path: 'grade/:id',
        element: <Grade />,
        
       },
       {
        path: 'grade/create/:id', 
        element: <GradeCreate />,
      },
      {
        path: 'grade/:id/grade/subject/:id', 
        element: <GradeUpdate />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
