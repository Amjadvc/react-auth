import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/ui/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterStep2 from './features/authentication/register/RegisterStep2';
import RegisterStep3 from './features/authentication/register/RegisterStep3';
import RegisterStep1 from './features/authentication/register/RegisterStep1';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}>
            <Route index element={<Navigate replace to="step-1" />} />
            <Route path="step-1" element={<RegisterStep1 />} />
            <Route path="step-2" element={<RegisterStep2 />} />
            <Route path="step-3" element={<RegisterStep3 />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
