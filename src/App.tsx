import React, { useState } from 'react';
import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  const [isAuth, setAuth] = useState<boolean>(false)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/auth' element={<AuthPage setAuth={() => setAuth(true)}/>}/>
          <Route path='/' element={isAuth ? <MainPage/> : <Navigate to='/auth' replace/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
