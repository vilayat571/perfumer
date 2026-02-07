import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePerfume from './pages/CreatePerfume'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-perfume" element={<CreatePerfume />} />
    </Routes>
  )
}

export default App
