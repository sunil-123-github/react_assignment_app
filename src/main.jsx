import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MouldMfgTrack } from './components/MouldMfgTrack.jsx'
import { AssignMould } from './components/AssignMould.jsx'
import { AdditionalElement } from './components/AdditionalElement.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/new-mould-mfg-tracking",
        element: <MouldMfgTrack />,
        children: [
          {
            // Nested route inside MouldMfgTrack
            path: "additional-element",
            element: <AdditionalElement />,
          },
        ],
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