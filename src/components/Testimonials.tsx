
import React from 'react';
import { useState } from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-lg text-hospital-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <svg className="w-8 h-8 text-hospital-100 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="flex text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsList = [
    {
      quote: "The medical care I received at MedCare was exceptional. The doctors took the time to listen to my concerns and developed a treatment plan specifically for me.",
      name: "Jessica Martinez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      quote: "I've been a patient at MedCare for over 5 years now. Their staff is always friendly and professional, and I never have to wait long for appointments.",
      name: "Robert Thompson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      quote: "After my surgery at MedCare, the follow-up care was incredible. The nurses called to check on me regularly, and my recovery was much faster than expected.",
      name: "Emma Williams",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsList.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsList.length) % testimonialsList.length);
  };

  return (
    <section id="testimonials" className="section-container gradient-bg">
      <h2 className="section-title">What Our Patients Say</h2>
      <p className="section-subtitle">
        Discover why patients choose MedCare for their healthcare needs.
      </p>
      
      {/* Desktop View - All testimonials */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsList.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            quote={testimonial.quote} 
            name={testimonial.name} 
            role={testimonial.role} 
            image={testimonial.image} 
          />
        ))}
      </div>
      
      {/* Mobile View - Carousel */}
      <div className="md:hidden">
        <div className="relative">
          <TestimonialCard 
            quote={testimonialsList[currentIndex].quote} 
            name={testimonialsList[currentIndex].name} 
            role={testimonialsList[currentIndex].role} 
            image={testimonialsList[currentIndex].image} 
          />
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-hospital-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-hospital-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
