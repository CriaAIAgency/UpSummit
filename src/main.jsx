import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './routes/Home'
import Patrocinar from './routes/Patrocinar'
import Sobre from './routes/Sobre'
import Error from './routes/Error'
import Motivos from './routes/Motivos'
import Midia from './routes/Midia'
import Edicoes from './routes/Edicoes'

const router = createBrowserRouter ([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/patrocinar', element: <Patrocinar /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/motivos', element: <Motivos /> },
      { path: '/midia', element: <Midia />},
      { path: '/edicoes', element: <Edicoes /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)