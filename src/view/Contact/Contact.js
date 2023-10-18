import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

// İletişim öğelerini oluşturan fonksiyon
function generateContactItem(link, icon, text) {
  return (
    <a href={link}>
      <div className="flex flex-col items-center group">
        <div className="w-10 h-10 p-2 bg-blue-500 rounded-full text-white shadow-lg shadow-blue-300 transition-all hover:bg-blue-600 hover:text-white hover:scale-150 duration-500">
          {icon}
        </div>
        <span className="hidden group-hover:block mt-2">{text}</span>
      </div>
    </a>
  );
}

function Contact() {
  return (
    <section id='contact'>
      <div className='container lg:pt-5'>
        <div className='text-center' data-aos="fade-down" data-aos-duration="1200">
          <h1 className='font-[800] text-[2rem] mb-8'>You can contact me with following links.</h1>
        </div>

        <div className='flex items-center justify-center'>
          <div className='flex space-x-10'>
            {generateContactItem("https://github.com", <FaGithub size={24} />, "GitHub")}
            {generateContactItem("https://linkedin.com", <FaLinkedin size={24} />, "LinkedIn")}
            {generateContactItem("https://instagram.com", <FaInstagram size={24} />, "Instagram")}
            {generateContactItem("https://twitter.com", <FaTwitter size={24} />, "Twitter")}
            {generateContactItem("mailto:youremail@gmail.com", <FaEnvelope size={24} />, "Email")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
