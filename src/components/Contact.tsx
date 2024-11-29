import React from 'react';
import { IoMailOpenSharp } from 'react-icons/io5';
import { BsTelephoneOutboundFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id="contact" className="pt-32 bg-[#AA5486] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold" data-aos="zoom-out-down">
              Get in Touch With Me
            </h2>
            <p className="text-lg leading-relaxed" data-aos="zoom-out-down">
              I would love to hear from you! Whether it's a project inquiry, collaboration, or just to say hello, feel free to get in touch.
            </p>
            <div className="flex gap-4 items-center text-lg" data-aos="zoom-out-down">
              <IoMailOpenSharp size={30} className="text-[#F7DF1E]" />
              <span>rumi91909@gmail.com</span>
            </div>
            <div className="flex gap-4 items-center text-lg" data-aos="zoom-out-down">
              <BsTelephoneOutboundFill size={30} className="text-[#61DAFB]" />
              <span>+92-346-5890978</span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#AA5486]"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#AA5486]"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label htmlFor="msg" className="text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={5}
                  className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#AA5486]"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className="bg-[#AA5486] text-white font-medium py-2 px-6 rounded shadow hover:bg-[#913d6c] transition duration-300"
                data-aos="zoom-out-down"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
