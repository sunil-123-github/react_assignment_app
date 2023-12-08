import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MouldMfgTrack } from './components/MouldRecord/MouldMfgTrack.jsx'
import { AssignMould } from './components/AssignMould/AssignMould.jsx'
import { CreateMould } from './components/CreateMould/CreateMould.jsx'
import store from './redux_store/Store/store.js'
import { Provider } from 'react-redux'

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
      },
      {
        path: '/create-mould-record',
        element: <CreateMould />
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>


)