
import React from 'react';
import { Heart, Briefcase, Stethoscope, Scissors, MonitorSmartphone, Pill } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="w-14 h-14 bg-hospital-50 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-hospital-500" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-hospital-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostics and personalized treatment plans for cardiac conditions."
    },
    {
      icon: Briefcase,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response teams ready to provide immediate medical attention."
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary care services for patients of all ages, focusing on preventive care and wellness."
    },
    {
      icon: Scissors,
      title: "Surgery",
      description: "State-of-the-art surgical facilities with expert surgeons specializing in minimally invasive procedures."
    },
    {
      icon: MonitorSmartphone,
      title: "Diagnostics",
      description: "Advanced imaging and laboratory services providing accurate and timely results for better diagnosis."
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "Full-service pharmacy offering prescription medications and expert pharmaceutical advice."
    }
  ];

  return (
    <section id="services" className="section-container gradient-bg">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We offer a wide range of medical services to meet all your healthcare needs with excellence and compassion.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
