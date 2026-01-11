import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterStep2 from './features/authentication/register/RegisterStep2';
import RegisterStep3 from './features/authentication/register/RegisterStep3';
import RegisterStep1 from './features/authentication/register/RegisterStep1';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AuthLayout from './components/ui/AuthLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing / marketing pages */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth pages */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />}>
            <Route index element={<Navigate replace to="step-1" />} />
            <Route path="step-1" element={<RegisterStep1 />} />
            <Route path="step-2" element={<RegisterStep2 />} />
            <Route path="step-3" element={<RegisterStep3 />} />
          </Route>
        </Route>

        {/* Protected / Home pages */}
        <Route path="home" element={<HomePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
