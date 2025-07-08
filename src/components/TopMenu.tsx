import React from 'react';
import { Button } from '@/components/ui/button';

const TopMenu: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-blue-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/6824f1e74792863c7aa3b60f_1750153105769_1a94a65e.png" 
              alt="AkunAI Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
              onClick={() => scrollToSection('ai-agent')}
            >
              AI Nego
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-blue-600">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;