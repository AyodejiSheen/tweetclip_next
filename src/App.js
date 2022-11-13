import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Alert } from "./components/alert/alert";
import { Auth } from "./views/auth/auth";
import { BrowserConfig } from "./views/auth/browerConfirmation";
import { ForgotPassword } from "./views/auth/forgotPassword";
import GoogleAuth from "./views/auth/googleAuth";
import { Login } from "./views/auth/login";
import { SignUp } from "./views/auth/signup";
import TwitterAuth from "./views/auth/TwitterAuth";
import { UpdatePassword } from "./views/auth/updatePassword";
import { Verification } from "./views/auth/verification";
import { ErrorPage } from "./views/errorpage";
import { Profile } from "./views/profile/profile";
import { Controls } from "./views/userDashboard/controls";
import { DashHome } from "./views/userDashboard/dashHome";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SuccessParams } from "./views/payments/successParams";
import { Cancel } from "./views/payments/cancel";
import setAuthToken from "./context/auth/setAuthToken";
import DashboardGuard from "./views/userDashboard/gaurd";








function App() {

  AOS.init();

  if (sessionStorage.ctoken) {
    setAuthToken(sessionStorage.ctoken)
  }


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
          <Route path="new-device/:email/:id" element={<BrowserConfig />}></Route>
        </Route>

        <Route path="dashboard" element={<DashboardGuard> <DashHome /> </DashboardGuard>}>
          <Route index element={<Controls />}></Route>
        </Route>

        <Route path="profile" element={<Profile />}></Route>

        <Route path="success/:tranCode" element={<SuccessParams />}></Route>
        <Route path="cancel" element={<Cancel />}></Route>

        <Route path="googleAuth" element={<GoogleAuth />}></Route>
        <Route path="twitterAuth" element={<TwitterAuth />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
