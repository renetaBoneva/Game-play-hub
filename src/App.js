import './App.css';
import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext';

import { Navigation } from './components/Navigation/Navigation';
import { MemoryGame } from './components/games/Memory Game/MemoryGame'
import { Login } from './components/user/Login/Login';
import { Register } from './components/user/Register/Register';
import { NotFound } from './components/common/NotFound/NotFound';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';
import { Logout } from './components/user/Logout/Logout';
import { UserOrGuest } from './components/user/UserOrGuest/UserOrGuest';
import { IsUserOrGuestGuard } from './components/common/IsUserOrGuest/IsUserOrGuestGuard';

function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <Routes>
            <Route path='/userOrGuest' element={<UserOrGuest />} />
            
          <Route element={<IsUserOrGuestGuard />}>
            <Route path='/memoryGame' element={<MemoryGame />} />
            {/* TODO: */}
            {/* <Route path='/underTheSea' element={<BubbleGame />} /> */}
            <Route path='/' element={<Catalog />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Route>

        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
