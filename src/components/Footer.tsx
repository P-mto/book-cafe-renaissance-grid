
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brown text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Renaissance Readers</h3>
            <p className="mb-4">Immerse yourself in the world of books and fine coffee in our Renaissance-inspired café.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream hover:text-gold">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-cream hover:text-gold">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-cream hover:text-gold">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gold font-serif text-xl mb-4">Contact</h3>
            <address className="not-italic mb-4">
              <p>123 Library Lane</p>
              <p>Booktown, BT 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@renaissancereaders.com</p>
            </address>
            <Button className="w-full bg-gold text-brown hover:bg-gold/90">
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cream/30 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Renaissance Readers Book Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
