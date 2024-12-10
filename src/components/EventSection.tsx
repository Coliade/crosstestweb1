import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const EventSection = () => {
  const events = [
    {
      title: "Championnat National de Motocross",
      date: "15 Juin 2024",
      location: "Circuit de Lacapelle-Marival",
      image: "https://images.unsplash.com/photo-1543104464-f838876ff711?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Grand Prix MX Pro",
      date: "22 Juillet 2024",
      location: "Circuit d'Ernée",
      image: "https://images.unsplash.com/photo-1576193929674-c31ba1d261c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="diagonal-box">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-black text-white text-center mb-16">
          ÉVÉNEMENTS
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <div className="flex items-center mb-2 text-gray-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <button className="mt-6 flex items-center space-x-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;