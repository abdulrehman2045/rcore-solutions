import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Loader from '../components/Loader.jsx';

export default function MainLayout() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => { document.body.style.overflow = loading ? 'hidden' : ''; }, [loading]);

  return (<><Loader show={loading} /><Navbar /><main><Outlet /></main><Footer /></>);
}
