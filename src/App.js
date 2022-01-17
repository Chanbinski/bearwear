import { Routes, Route } from 'react-router-dom';
import User from "./Components/User"
import Category from "./Components/Category"
import Authentication from "./Components/Authentication"

function App() {
  return (
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='/auth' element={<Authentication />} />
      <Route path='/:category' element={<Category />} />
    </Routes>
  );
}

export default App;
