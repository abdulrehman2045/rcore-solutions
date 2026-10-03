import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Hub from './pages/Hub.jsx';
import Detail from './pages/Detail.jsx';
import { Process, Careers } from './pages/Company.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {['services', 'products', 'industries'].map((k) => (
          <Route key={k} path={k}>
            <Route index element={<Hub kind={k} />} />
            <Route path=":slug" element={<Detail kind={k} />} />
          </Route>
        ))}
        <Route path="company/process" element={<Process />} />
        <Route path="company/careers" element={<Careers />} />
        <Route path="*" element={<Hub kind="services" />} />
      </Route>
    </Routes>
  );
}
