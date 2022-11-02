import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Alert } from "./components/alert/alert";
import GoogleAuth from "./components/googleAuth";
import { Auth } from "./views/auth/auth";
import { BrowserConfig } from "./views/auth/browerConfirmation";
import { ForgotPassword } from "./views/auth/forgotPassword";
import { Login } from "./views/auth/login";
import { SignUp } from "./views/auth/signup";
import { UpdatePassword } from "./views/auth/updatePassword";
import { Verification } from "./views/auth/verification";
import { ErrorPage } from "./views/errorpage";
import { Color } from "./views/userDashboard/color/color";
import { Controls } from "./views/userDashboard/controls";
import { DashHome } from "./views/userDashboard/dashHome";






function App() {
  return (
    <>
      <Alert />

      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="verification" element={<Verification />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          <Route path="reset-password" element={<UpdatePassword />}></Route>
          <Route path="new-device" element={<BrowserConfig />}></Route>
        </Route>

        <Route path="dashboard" element={<DashHome />}>
          <Route index element={<Controls/>}></Route>
          <Route path="color" element={<Color/>}></Route>
        </Route>


        <Route path="googleAuth" element={<GoogleAuth />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
