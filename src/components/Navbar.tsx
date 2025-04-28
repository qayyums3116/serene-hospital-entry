
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Hospital, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Hospital className="h-8 w-8 text-hospital-500" />
            <span className="ml-2 text-xl font-bold text-hospital-800">MedCare</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-hospital-500 transition-colors">
              Services
            </a>
            <a href="#doctors" className="text-gray-600 hover:text-hospital-500 transition-colors">
              Doctors
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-hospital-500 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-hospital-500 transition-colors">
              Contact
            </a>
            <Button className="bg-hospital-500 hover:bg-hospital-600">
              Book Appointment
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-hospital-500"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-600 hover:text-hospital-500 px-2 py-1 rounded"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
              <a 
                href="#doctors" 
                className="text-gray-600 hover:text-hospital-500 px-2 py-1 rounded"
                onClick={toggleMobileMenu}
              >
                Doctors
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-hospital-500 px-2 py-1 rounded"
                onClick={toggleMobileMenu}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-hospital-500 px-2 py-1 rounded"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
              <Button className="bg-hospital-500 hover:bg-hospital-600 w-full">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
