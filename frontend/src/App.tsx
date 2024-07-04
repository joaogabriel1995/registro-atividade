import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes'

export const App = () => {
  return (
  <>
  <BrowserRouter>
  <AppRoutes></AppRoutes>
  </BrowserRouter>
  </>
  )
}


