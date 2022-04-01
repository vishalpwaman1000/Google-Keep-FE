import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Registration from './components/Authentication/Registration'
import Dashboard from './components/Dashboard/Dashboard'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
