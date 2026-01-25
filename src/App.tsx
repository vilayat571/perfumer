import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreatePerfume from './pages/CreatePerfume'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createperfume" element={<CreatePerfume />} />
    </Routes>
  )
}

export default App
