import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// <BrowserRouter>
//     <Routes>
//       <Route path="landing" element={<LandingPage />} />
//       <Route element={<AppLayout />}>
//         <Route index element={<Navigate replace to="login" />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />}>
//           <Route index element={<Navigate replace to="step-1" />} />
//           <Route path="step-1" element={<RegisterStep1 />} />
//           <Route path="step-2" element={<RegisterStep2 />} />
//           <Route path="step-3" element={<RegisterStep3 />} />
//         </Route>
//       </Route>
//       <Route path="home" element={<HomePage />} />
//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   </BrowserRouter>
