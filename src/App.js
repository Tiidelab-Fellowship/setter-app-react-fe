import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/Signup";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import CreateNewPasswordPage from "./Pages/CreateNewPasswordPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landing-page";
import ContactUs from "./Pages/Contact-us";
import SocialDashboard from "./Pages/SocialDashboardPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import PostQueue from "./Pages/PostQueuePage";
import PostSchedule from "./Pages/PostSchedule";
import ProfilePage from "./Pages/ProfilePage";
import FAQpage from "./Pages/FAQ";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy";
import TandCPage from "./Pages/Terms&Condition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/SocialDashboard" element={<SocialDashboard />} />
      <Route path="/AnalyticsPage" element={<AnalyticsPage />} />
      <Route path="/PostQueue" element={<PostQueue />} />
      <Route path="/PostSchedule" element={<PostSchedule />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
      <Route path="/CreateNewPassword" element={<CreateNewPasswordPage />} />
      <Route path="/FAQ" element={<FAQpage />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
      <Route path="/T&Cs" element={<TandCPage />} />
    </Routes>
  );
}
export default App;
