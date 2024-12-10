import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Award, Zap } from 'lucide-react';

interface Bike {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  features: string[];
}

const bikes: Bike[] = [
  {
    id: 1,
    name: "KX 450",
    category: "Competition",
    price: "9,999 €",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Moteur 449cc", "Suspension Showa", "Système de départ électrique"]
  },
  {
    id: 2,
    name: "YZ 250F",
    category: "Pro Racing",
    price: "8,999 €",
    image: "https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Moteur 250cc 4T", "Power Tuner App", "Cadre en aluminium"]
  },
  {
    id: 3,
    name: "RM-Z 450",
    category: "Elite",
    price: "9,499 €",
    image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Injection électronique", "Suspension réglable", "Freins Brembo"]
  },
  {
    id: 4,
    name: "CRF 250R",
    category: "Performance",
    price: "8,799 €",
    image: "https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["HRC Launch Control", "Châssis en aluminium", "Modes de conduite"]
  }
];

const BikeCard: React.FC<{ bike: Bike; index: number }> = ({ bike, index }) => (
  <motion.div
    key={bike.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={bike.image} 
        alt={bike.name}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
        {bike.category}
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{bike.name}</h3>
      <p className="text-red-500 font-semibold mb-4">{bike.price}</p>
      
      <div className="space-y-3 mb-6">
        {bike.features.map((feature, idx) => (
          <div key={idx} className="flex items-center text-gray-300">
            <Wrench className="w-4 h-4 mr-2 text-red-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:from-red-700 hover:to-red-800 transition-colors">
        <span>Découvrir</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const FeatureCard: React.FC<{ icon: any; title: string; text: string; index: number }> = ({ icon: Icon, title, text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="text-center p-6"
  >
    <Icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{text}</p>
  </motion.div>
);

const BikeShowcase: React.FC = () => {
  const features = [
    { icon: Zap, title: "Performance", text: "Moteurs optimisés pour une puissance maximale" },
    { icon: Wrench, title: "Technologie", text: "Systèmes électroniques de pointe" },
    { icon: Award, title: "Qualité", text: "Composants premium et finitions soignées" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black text-white text-center mb-16"
        >
          DÉCOUVREZ NOS MODÈLES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bikes.map((bike, index) => (
            <BikeCard key={bike.id} bike={bike} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase;