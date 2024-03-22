import './App.css';
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { IsNotUserOrGuestGuard } from './components/common/IsNotUserOrGuestGuard/IsNotUserOrGuestGuard';
import { useSelector } from 'react-redux';
import { Loading } from './components/common/Loading/Loading';
import { TicTacToeGame } from './components/games/Tic Tac Toe Game/TicTacToeGame';
import { MyProfile } from './components/user/MyProfile/MyProfile';

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <>
      <AuthProvider>        
        <ToastContainer />{/* Notification component */}
        <Navigation />

        {isLoading
          ? <Loading />
          : (
            <Routes>
              <Route element={<IsUserOrGuestGuard />}>
                <Route path='/userOrGuest' element={<UserOrGuest />} />
              </Route>

              <Route element={<IsNotUserOrGuestGuard />}>
                <Route path='/' element={<Catalog />} />
                {/* games */}
                <Route path='/memoryGame' element={<MemoryGame />} />
                <Route path='/ticTacToeGame' element={<TicTacToeGame />} />
                {/* user logic */}
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<MyProfile />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<NotFound />} />
              </Route>

            </Routes>
          )}
          
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
