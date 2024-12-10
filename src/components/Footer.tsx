import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MX Pro</h3>
            <p className="text-gray-400">
              Votre destination ultime pour tout ce qui concerne le motocross.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@mxpro.fr</p>
            <p className="text-gray-400">Tél: +33 1 23 45 67 89</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MX Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;