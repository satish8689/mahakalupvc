import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import './globals.scss';
import '../styles/global.scss'; // Global CSS
import '../styles/slider.scss'
import '../styles/bootstrap.min.css'; // Bootstrap CSS
import '../styles/midcontent.scss';
import '../styles/footer.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically switch favicon based on route
function FaviconSwitcher() {
  const pathname = usePathname();

  useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(reg => console.log('✅ Service Worker registered:', reg.scope))
                .catch(err => console.log('❌ Service Worker registration failed:', err));
        }
    }, []);

  useEffect(() => {
    const favicon = document.querySelector("link[rel~='icon']");

    if (!favicon) return;

    if (pathname.startsWith('/admin')) {
      favicon.href = '/admin-favicon.png'; // Make sure this exists in /public
    } else {
      favicon.href = '/favicon.png';
    }
  }, [pathname]);

  return null;
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <FaviconSwitcher />
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
