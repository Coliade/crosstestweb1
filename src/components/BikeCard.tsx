import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface BikeCardProps {
  image: string;
  name: string;
  description: string;
  specs: {
    engine: string;
    power: string;
    weight: string;
  };
}

const BikeCard: React.FC<BikeCardProps> = ({ image, name, description, specs }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] group perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`absolute w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative h-full bg-gradient-to-br from-gray-900 to-black text-white rounded-xl overflow-hidden">
            <img src={image} alt={name} className="w-full h-2/3 object-cover" />
            <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-2xl font-bold mb-2">{name}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-red-900 to-black text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Spécifications</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Plus className="w-5 h-5" />
                <p>Moteur: {specs.engine}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Plus className="w-5 h-5" />
                <p>Puissance: {specs.power}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Plus className="w-5 h-5" />
                <p>Poids: {specs.weight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;