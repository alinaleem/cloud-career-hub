
import { ReactNode } from 'react';
import Navigation from './Navigation';
import ParticleBackground from './ParticleBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
