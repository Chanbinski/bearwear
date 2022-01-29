import { useState } from "react"
import { Routes, Route, Navigate } from 'react-router-dom';
import User from "./Components/User"
import Category from "./Components/Category"
import Authentication from "./Components/Authentication"
import NoMatch from "./Components/NoMatch"

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase-config"

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  return (
    <Routes>
      {!user && (
        <Route path='/' element={<Authentication />} />
      )}
      {user && (
        <>
          <Route path='/' element={<User />} />
          <Route path='/outer' element={<Category name="outer" />} />
          <Route path='/tops' element={<Category name="tops" />} />
          <Route path='/bottoms' element={<Category name="bottoms" />} />
          <Route path='/accessories' element={<Category name="accessories" />} />
          <Route path='/dresses' element={<Category name="dresses" />} />
          <Route path='/shoes' element={<Category name="shoes" />} />
        </>
      )}
      <Route path='*' element={<NoMatch/>} />
    </Routes>
    
  );
}

export default App;
