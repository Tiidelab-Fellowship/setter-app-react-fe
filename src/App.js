// import logo from './logo.svg';
// import './App.css';
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/Signup";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import CreateNewPasswordPage from "./Pages/CreateNewPasswordPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
      <Route path="/CreateNewPassword" element={<CreateNewPasswordPage />} />
    </Routes>

  );
}
export default App;
