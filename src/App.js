import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Alert } from "./components/alert/alert";
import GoogleAuth from "./components/googleAuth";
import { Login } from "./views/login";
import { SignUp } from "./views/signup";
import { Verification } from "./views/verification";

function App() {
  return (
    <>
      <Alert />

      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="googleAuth" element={<GoogleAuth />}></Route>
        <Route path="verification" element={<Verification />}></Route>
      </Routes>
    </>
  );
}

export default App;
