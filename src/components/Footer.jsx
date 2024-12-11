import React from 'react';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from the free brands package
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-orange-800 pt-12 pb-8">
      {/* Footer Links */}
      <div className="container mx-auto px-6 lg:px-12 mt-6 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold  mb-4 text-2xl tracking-wide">About Us</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <a href="#about" className="hover:text-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
                Who we are
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
                Our Services
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
                Meet the Team
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold  mb-4 text-2xl tracking-wide">Resources</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>
              <a href="#faq" className="hover:text-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
                FAQs
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
                Blog
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-teal-100 transition duration-300 ease-in-out transform hover:scale-105">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold  mb-4 text-2xl tracking-wide">Contact</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>Address: 156 SEA STREET, NEGOMBO</li>
            <li>Phone 1: 0766407990</li>
            <li>Phone 2: 0773116251</li>
            <li>Company: KEZI INTERNATIONAL COURIER SERVICE PVT LTD, NEGOMBO</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold  mb-4 text-2xl tracking-wide">Follow Us</h3>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100054259882123&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 text-3xl transition duration-300 ease-in-out transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 text-3xl transition duration-300 ease-in-out transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 text-3xl transition duration-300 ease-in-out transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-100 text-3xl transition duration-300 ease-in-out transform hover:scale-125"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} KEZI INTERNATIONAL COURIER SERVICE PVT LTD. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
