import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' }
  ];

  const paymentMethods = [
    { name: 'Visa', logo: '💳' },
    { name: 'Mastercard', logo: '💳' },
    { name: 'PayPal', logo: '💳' },
    { name: 'Apple Pay', logo: '💳' }
  ];

  return (
    <div className=" bg-gray-50 flex flex-col">
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* About Us Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white ">About Us</h3>
                <p className="text-orange-100 leading-relaxed ">
                  We deliver fresh, naturally ripened mangoes straight from our farms to your doorstep. Quality, taste, and customer satisfaction are at the heart of everything we do.
                </p>
              </div>

              {/* Quick Links Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white ">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-orange-100 hover:text-white transition-colors duration-200  hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white ">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-200" />
                    <span className="text-orange-100 ">info@yourcompany.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-200" />
                    <span className="text-orange-100 ">+1 (800) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-200" />
                    <span className="text-orange-100 ">123 Avenue Rd, City, Country</span>
                  </div>
                </div>
              </div>

              {/* Follow Us Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white ">Follow Us</h3>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </a>
                    );
                  })}
                </div>

                {/* Payment Methods */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">We Accept</h4>
                  <div className="flex space-x-2">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.name}
                        className="bg-white rounded-lg px-3 py-2 flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
                      >
                        <span className="text-2xl">{method.logo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-orange-300/30">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                
                {/* Copyright */}
                <div className="text-orange-100 ">
                  © 2025 Your Company Name. All rights reserved.
                </div>

                {/* Footer Links */}
                <div className="flex space-x-6">
                  <a href="#terms" className="text-orange-100 hover:text-white transition-colors duration-200 italic">
                    Terms of Service
                  </a>
                  <a href="#privacy" className="text-orange-100 hover:text-white transition-colors duration-200 italic">
                    Privacy Policy
                  </a>
                </div>

                {/* Mango Icon */}
                {/* <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-full transform rotate-12 shadow-lg">
                    <div className="absolute -top-1 right-1 w-3 h-4 bg-green-500 rounded-full transform -rotate-12"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}