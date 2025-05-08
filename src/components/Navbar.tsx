
import React from 'react';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-cream border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="Renaissance Readers" 
            className="h-10 w-auto"
          />
          <h1 className="text-burgundy font-serif text-xl md:text-2xl font-semibold">
            Renaissance Readers
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#books" className="text-brown hover:text-burgundy transition-colors">Books</a>
          <a href="#cafe" className="text-brown hover:text-burgundy transition-colors">Café</a>
          <a href="#events" className="text-brown hover:text-burgundy transition-colors">Events</a>
          <a href="#spaces" className="text-brown hover:text-burgundy transition-colors">Spaces</a>
          <Button className="bg-burgundy hover:bg-burgundy/90 text-cream">
            Become a Member
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream py-4 px-4 border-b border-border animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#books" className="text-brown hover:text-burgundy transition-colors px-2 py-1">Books</a>
            <a href="#cafe" className="text-brown hover:text-burgundy transition-colors px-2 py-1">Café</a>
            <a href="#events" className="text-brown hover:text-burgundy transition-colors px-2 py-1">Events</a>
            <a href="#spaces" className="text-brown hover:text-burgundy transition-colors px-2 py-1">Spaces</a>
            <Button className="bg-burgundy hover:bg-burgundy/90 text-cream w-full">
              Become a Member
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
