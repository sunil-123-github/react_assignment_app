import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MouldMfgTrack } from './components/MouldRecord/MouldMfgTrack.jsx'
import { AssignMould } from './components/AssignMould/AssignMould.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/new-mould-mfg-tracking",
        element: <MouldMfgTrack />,
      },
      {
        path: "/assign-mould-(supplier&life)",
        element: <AssignMould />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)