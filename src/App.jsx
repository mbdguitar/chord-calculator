import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './layout/Home';
import About from './layout/About';
import Root from './layout/Root';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App; 