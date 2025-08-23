import '@fontsource/inter';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './routes/App.tsx';
import { Workout } from './routes/Workout.tsx';
import { PageNotFound } from './routes/PageNotFound.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/workout', element: <Workout /> },
  { path: '/*', element: <PageNotFound /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
