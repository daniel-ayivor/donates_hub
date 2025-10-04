import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Brighter Futures</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering children and small businesses in Ghana to build a brighter tomorrow. 
              Together, we create lasting change in communities across the nation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/impact" className="text-gray-300 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-white transition-colors">Activities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">Accra, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300 text-sm">info@brighterfutures.org</span>
              </div>
            </div>
          </div>
            <span className="text-2xl font-bold">African Assistance Plan</span>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            Empowering children, families, and communities across Africa to build a brighter tomorrow. 
            © 2024 African Assistance Plan. All rights reserved. Making a difference, one life at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;