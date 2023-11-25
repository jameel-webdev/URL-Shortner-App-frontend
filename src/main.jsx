import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Users/LoginPage.jsx";
import RegistrationPage from "./pages/Users/RegistrationPage";
import ForgotPasswordPage from "./pages/Users/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Users/ResetPasswordPage";
import MainUrlPage from "./pages/Url/MainUrlPage";
import ShortUrlPage from "./pages/Url/ShortUrlPage";
import Hero from "./components/Hero.jsx";
import ActivationPage from "./pages/Users/ActivationPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} path="/" element={<Hero />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/active" element={<ActivationPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/url" element={<MainUrlPage />} />
          <Route path="/shorturl" element={<ShortUrlPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
