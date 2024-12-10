import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Map, Users } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "GARANTIE PREMIUM",
      description: "2 ans de garantie constructeur sur toutes nos motos"
    },
    {
      icon: Clock,
      title: "SERVICE 24/7",
      description: "Assistance technique disponible à tout moment"
    },
    {
      icon: Map,
      title: "CIRCUITS PARTENAIRES",
      description: "Accès exclusif à nos circuits partenaires"
    },
    {
      icon: Users,
      title: "COMMUNAUTÉ",
      description: "Rejoignez une communauté passionnée de riders"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl"
            >
              <feature.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;