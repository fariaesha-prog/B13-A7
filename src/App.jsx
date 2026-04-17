import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
