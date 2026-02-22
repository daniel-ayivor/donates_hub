import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../../public/images/logo.jpeg'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Africa Assistance Plan Logo" className="h-8 w-8 rounded-md text-brand-gold" />
              <span className="text-2xl font-bold">Africa Assistance Plan</span>
            </Link>
            <p className="text-yellow-600 mb-6 max-w-md">
          ...That Africa Might Be Saved!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/AAPGHANA" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://twitter.com/aapghana" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/africa.assistanceplan/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/impact" className="text-gray-300 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-white transition-colors">Activities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-gold" />
                <span className="text-gray-300 text-sm">GNAT ST BS-0064-4803, Sunyani, Bono Region, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                <span className="text-gray-300 text-sm">+233 50 403 7082</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                <span className="text-gray-300 text-sm">+233 26 284 8837</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-gold" />
                <span className="text-gray-300 text-sm">aap@aapghana.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Committed to transparency. When you donate to Africa Assistance Plan, your donations support our programs for the vulnerable in societies where we serve.
            © 2024 Africa Assistance Plan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;