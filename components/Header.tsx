'use client';
import Navbar from './Navbar';
import { useRouteStore } from '@/hooks/RouteStore';

const Header = () => {

  const {currentRoute} = useRouteStore()
  
  return (
    <header className={`sticky top-0 left-0 right-0 w-full z-[9999] ${currentRoute == '/contact' ? 'bg-yellowish' : 'bg-white/80'}  backdrop-blur-sm`}>
      <Navbar />
    </header>
  );
};

export default Header;
