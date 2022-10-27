import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Alert } from './components/alert/alert';
import { Login } from './views/login';
import { SignUp } from './views/signup';









function App() {
  return (
    <>

      <Alert />

      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>

    </>


  );
}

export default App;
