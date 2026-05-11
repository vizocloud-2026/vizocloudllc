import { Outlet } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { CursorTrail } from '../components/CursorTrail';

export function RootLayout() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <ScrollToTop />
      <CursorTrail />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
