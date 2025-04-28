
import React from 'react';

interface DoctorProps {
  name: string;
  specialty: string;
  image: string;
}

const DoctorCard: React.FC<DoctorProps> = ({ name, specialty, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-w-3 aspect-h-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-hospital-800 mb-1">{name}</h3>
        <p className="text-teal-600 mb-3">{specialty}</p>
        <div className="flex justify-center space-x-2">
          <a href="#" className="w-8 h-8 bg-hospital-50 rounded-full flex items-center justify-center text-hospital-500 hover:bg-hospital-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
          <a href="#" className="w-8 h-8 bg-hospital-50 rounded-full flex items-center justify-center text-hospital-500 hover:bg-hospital-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </a>
          <a href="#" className="w-8 h-8 bg-hospital-50 rounded-full flex items-center justify-center text-hospital-500 hover:bg-hospital-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Doctors = () => {
  const doctorsList = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. David Wilson",
      specialty: "Orthopedics",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="doctors" className="section-container">
      <h2 className="section-title">Meet Our Doctors</h2>
      <p className="section-subtitle">
        Our team of highly qualified medical professionals is committed to providing you with the best care possible.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctorsList.map((doctor, index) => (
          <DoctorCard 
            key={index} 
            name={doctor.name} 
            specialty={doctor.specialty} 
            image={doctor.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default Doctors;
