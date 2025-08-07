import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../lib/fontawesome"; //path of lib

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-10 lg:px-10 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">BookStore</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your cozy corner for books. Discover, collect, and read from
            thousands of titles.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Explore More
          </h3>
          <ul className="space-y-2">
            <li>
              <button to="#" className="hover:text-white transition">
                Shop
              </button>
            </li>
            <li>
              <button to="#" className="hover:text-white transition">
                About Us
              </button>
            </li>
            <li>
              <button to="#" className="hover:text-white transition">
                Blog
              </button>
            </li>
            <li>
              <button to="#" className="hover:text-white transition">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-3 text-gray-400">
            Get weekly book deals and reading tips directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center w-full">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:flex-1 px-4 py-2 text-sm bg-gray-800 border-none rounded-md focus:outline-none focus:ring focus:ring-[#0b7c6b]"
            />
            <button
              type="submit"
              className="mt-3 cursor-pointer sm:mt-0 sm:ml-2 px-4 py-2 text-sm font-medium bg-[#0b7c6b]  hover:bg-[#0b7d7c] text-white rounded-md transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect with Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <button to="#" className="hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} className="h-5" />
              </button>
              <button to="#" className="hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={["fab", "twitter"]} className="h-5" />
              </button>
              <button to="#" className="hover:text-white cursor-pointer">
                <FontAwesomeIcon icon={["fab", "instagram"]} className="h-5" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">We Accept</h3>
            <div className="flex space-x-3">
              <FontAwesomeIcon icon={["fab", "cc-visa"]} className="h-6" />
              <FontAwesomeIcon
                icon={["fab", "cc-mastercard"]}
                className="h-6"
              />
              <FontAwesomeIcon icon={["fab", "cc-paypal"]} className="h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 BookNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
