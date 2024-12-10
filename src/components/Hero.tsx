import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-70"
        >
          <source
            src="https://player.vimeo.com/external/517090081.sd.mp4?s=8425562421b7d54d4e8b6a5e3e44aa61ea29d159&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-8xl md:text-9xl font-black mb-6 text-stroke">
          MX PRO
        </h1>
        <div className="overflow-hidden">
          <p className="text-xl md:text-3xl mb-8 reveal-on-scroll visible">
            REPOUSSEZ VOS LIMITES
          </p>
        </div>
        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-3 text-lg transition-all duration-300 transform hover:scale-110">
          DÉCOUVRIR L'AVENTURE
        </button>
        <ChevronDown 
          className="absolute bottom-8 animate-bounce w-8 h-8" 
          onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
        />
      </div>
    </div>
  );
};

export default Hero;