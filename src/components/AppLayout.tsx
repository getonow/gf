import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import TopMenu from './TopMenu';
import NegotiationStrategy from './NegotiationStrategy';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <TopMenu />
      
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
            Negotiation Intelligence Platform
          </h1>
          <p className="text-blue-700 text-lg">
            AI-powered contract analysis and vendor benchmarking for strategic procurement decisions
          </p>
        </header>
        
        <div className="space-y-8">
          <div id="ai-agent">
            <NegotiationStrategy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;