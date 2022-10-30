// import logo from './logo.svg';
// import './App.css';
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/Signup";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import CreateNewPasswordPage from "./Pages/CreateNewPasswordPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landing-page";
import ContactUs from "./Pages/Contact-us";
import Verification from "./Pages/VerificationPage";
import Successful from "./Pages/Successful";
import SocialDashboard from "./Pages/SocialDashboardPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import PostQueue from "./Pages/PostQueuePage";
import Messages from "./Pages/MessagePage";
import PostSchedule from "./Pages/PostSchedule";  
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element= {<LandingPage />} />
      <Route path="/ContactUs" element= {<ContactUs />} />
      <Route path="/Verification" element= {<Verification />} />
      <Route path="/Successful" element= {<Successful />} />
      <Route path="/SocialDashboard" element= {<SocialDashboard />} />
      <Route path="/AnalyticsPage" element= {<AnalyticsPage />} />
      <Route path="/PostQueue" element= {<PostQueue />} />
      <Route path="/Messages" element= {<Messages />} />
      <Route path="/PostSchedule" element= {<PostSchedule />} />
      <Route path="/ProfilePage" element= {<ProfilePage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
      <Route path="/CreateNewPassword" element={<CreateNewPasswordPage />} />
    </Routes>

  );
}
export default App;
