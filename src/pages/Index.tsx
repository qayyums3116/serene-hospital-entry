
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
