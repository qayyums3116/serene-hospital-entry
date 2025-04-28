
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hospital-50 to-teal-50 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hospital-800 leading-tight">
              Your Health Is Our <span className="text-hospital-500">Priority</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              MedCare provides exceptional healthcare services with cutting-edge technology and compassionate care. Your journey to better health starts here.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="bg-hospital-500 hover:bg-hospital-600 text-white px-8 py-6 flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> Book Appointment
              </Button>
              <Button variant="outline" className="border-hospital-500 text-hospital-600 hover:bg-hospital-50 px-8 py-6 flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Call Us
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-teal-400 border-2 border-white flex items-center justify-center text-white font-medium">JD</div>
                <div className="w-10 h-10 rounded-full bg-hospital-400 border-2 border-white flex items-center justify-center text-white font-medium">AM</div>
                <div className="w-10 h-10 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center text-white font-medium">SK</div>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-hospital-600">1000+ </span>
                Satisfied Patients
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-100 rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-hospital-100 rounded-full -z-10" />
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="Doctor with patient" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
