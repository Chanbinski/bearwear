import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home"
import Category from "./Components/Category"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:category' element={<Category />} />
    </Routes>
  );
}

export default App;
