import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Alert } from "./components/alert/alert";
import GoogleAuth from "./components/googleAuth";
import { Auth } from "./views/auth/auth";
import { BrowserConfig } from "./views/auth/browerConfirmation";
import { ForgotPassword } from "./views/auth/forgotPassword";
import { UpdatePassword } from "./views/auth/updatePassword";
import { Login } from "./views/login";
import { SignUp } from "./views/signup";
import { Verification } from "./views/verification";





function App() {
  return (
    <>
      <Alert />

      <Routes>
          <Route path="/" element={<Auth/>}>
            <Route index element={<SignUp/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="verification" element={<Verification/>}></Route>
            <Route path="forgot-password" element={<ForgotPassword/>}></Route>
            <Route path="reset-password" element={<UpdatePassword/>}></Route>
            <Route path="new-device" element={<BrowserConfig/>}></Route>
          </Route>
          <Route path="googleAuth" element={<GoogleAuth/>}></Route>
      </Routes>
    </>
  );
}

export default App;
