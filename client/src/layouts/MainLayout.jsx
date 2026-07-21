import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 font-sans flex flex-col justify-between selection:bg-neon-cyan selection:text-cyber-dark">
      {/* Dynamic Navbar on top */}
      <Navbar />

      {/* Page Content will render here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Persistent Footer on bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;