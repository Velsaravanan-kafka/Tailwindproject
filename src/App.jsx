import React from 'react';
import { Button } from 'antd';
import { useState, useEffect } from 'react';

import razorpay from './assets/razor.webp';

// SVG for the Razorpay Logo
// const RazorpayLogo = () => (
//     <svg
//         width="120"
//         height="24"
//         viewBox="0 0 120 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="cursor-pointer"
//     >
//         {/* ... SVG path data remains the same ... */}
//         <path
//             d="M5.722 23.542h4.889V0H5.722v23.542zM21.5 19.014v4.528h4.89v-4.528c1.805-.625 3.125-2.222 3.125-4.278 0-2.5-2.014-4.514-4.514-4.514-2.5 0-4.514 2.014-4.514 4.514 0 2.056 1.32 3.653 3.125 4.278zm2.445-1.417c-1.667 0-3.097-1.32-3.097-3.097s1.43-3.097 3.097-3.097 3.097 1.43 3.097 3.097-1.43 3.097-3.097 3.097zM35.618 23.542h4.889V9.528h-4.889v14.014zM44.437 23.542h4.89V0h-4.89v23.542zM52.84 23.542h13.986V19.014H57.73V0h-4.89v23.542zM75.965 20.347l6.639 3.195h5.416l-9.132-7.89 8.75-9.132h-5.417l-6.25 6.424-2.5-6.424h-4.89l5.028 12.042-5.416 5.416h5.277l2.5-3.652zM102.77 23.542h4.89V0h-4.89v23.542zM113.785 23.542h4.889V9.528h-4.889v14.014z"
//             fill="white"
//         ></path>
//         <path
//             d="M0 19.014v4.528h4.89v-5.944c0-2.5 1.945-4.653 4.444-4.653 2.5 0 4.445 2.153 4.445 4.653v5.944h4.89v-4.528c1.805-.625 3.055-2.222 3.055-4.278 0-2.5-2.013-4.514-4.513-4.514-2.5 0-4.514 2.014-4.514 4.514 0 2.056 1.25 3.653 3.055 4.278v-4.278c0-2.5-2.014-4.514-4.514-4.514-2.5 0-4.514 2.014-4.514 4.514 0 2.056 1.32 3.653 3.125 4.278v-5.736c0-2.5 2.014-4.514 4.514-4.514 2.5 0 4.514 2.014 4.514 4.514v5.736h4.89v-4.528c1.805-.625 3.125-2.222 3.125-4.278 0-2.5-2.014-4.514-4.514-4.514-2.5 0-4.514 2.014-4.514 4.514 0 2.056 1.32 3.653 3.125 4.278z"
//             fill="#528FF0"
//         ></path>
//     </svg>
// );
import { DownOutlined, GlobalOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';

// --- Assets (placeholders for real images) ---
const slideImage1 = "https://placehold.co/600x400/000000/FFF?text=In-Store+Payments";
const slideImage2 = "https://placehold.co/600x400/1e40af/FFF?text=Current+Account";
const slideImage3 = "https://placehold.co/600x400/166534/FFF?text=Payroll";
const slides = [slideImage1, slideImage2, slideImage3];
function Navbar() {
  const navLinks = [
    "Payments", "Banking+", "Payroll", "Engage", "Partners", "Resources", "Pricing"
  ];

  return(
      <nav  className='bg-red-400 w-full flex items-center justify-center h-16 shadow-lg'>
        <div className = 'container mx-auto flex items-center justify-between px-4'>
          <div className='flex items-center space-x-8'>
             <img src={razorpay} className='w-[120px] h-[120px]' />
             <ul className='flex items-center space-x-6'>
              {navLinks.map((link)=>(
                  <li key={link}>
                    <a href='#' className='hover:text-purple-700'>{link}</a>
                    </li>
              ))}
             </ul>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center cursor-pointer'>
              <img src="https://flagcdn.com/in.svg" width="28" alt="India Flag" />
            </div>
            <Button type='primary' className="bg-transparent text-white border-blue-400 hover:bg-blue-900">
              Login
            </Button>
            <Button type='primary'>
              Sign up
            </Button>
          </div>
        </div>
      </nav>
  );
}
function PromoBar() {
  // An array to hold the currency symbols for easy mapping
  const currencies = ['£', '€', '$', '¥', 'A$', 'د.إ'];

  return (
    // Main container for the bar with a light blue background
    // It's a flex container to center its content on the page
    <div className="bg-sky-100/70 w-full flex justify-center py-3 px-4 sm:px-0">
      
      {/* Centered content wrapper that pushes its children to the edges */}
      <div className="container flex items-center justify-between text-sm">

        {/* Left Side: "MoneySaver Export Account" section */}
        <div className="flex items-center space-x-3">
          <strong className="text-slate-800 px-6">MoneySaver</strong>
          <span className="bg-sky-200 text-sky-800 text-xs font-bold px-2 py-1 rounded-md hidden sm:block">
            Export Account
          </span>
        </div>

        {/* Middle Section: Promotional text and link */}
        {/* This section is hidden on mobile and only appears on medium screens and up */}
        <div className="hidden md:flex items-center space-x-2">
          <p className="text-slate-600">0 forex markup. 75% savings on international bank transfers!</p>
          <a href ='#' className='font-bold text-blue-600 hover:underline'>Signup</a>
        </div>
        
        {/* Right Side: Currency icons */}
        {/* This section is hidden on tablets and only appears on large screens and up */}
        <div className="hidden lg:flex items-center space-x-2 px-6">
          {currencies.map((currency) => (
            <div key={currency} className="w-7 h-7 rounded-full bg-slate-200/60 flex items-center justify-center font-medium text-slate-700 px-6">
              {currency}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-play effect
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000); // Change slide every 4 seconds
        return () => clearInterval(timer); // Cleanup the timer
    }, []);

    return (
        <section className="bg-slate-900 text-white w-full pt-16 pb-20 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                
                {/* Left Side: Text Content */}
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left z-10">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        Easy In-Store Payments <br/> for India's boldest disruptors
                    </h1>
                    <p className="text-lg text-slate-300 mb-8">
                        Quick Payments | Seamless Integration | Top-tier UPI stack
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Button type="primary" size="large" className="bg-blue-500 hover:bg-blue-600 flex items-center">
                            Sign Up Now <RightOutlined className="ml-2" />
                        </Button>
                        <Button type="default" size="large" className="bg-transparent text-white hover:text-slate-900 hover:bg-white">
                            Know More
                        </Button>
                    </div>
                </div>

                {/* Right Side: Image Carousel */}
                <div className="md:w-1/2 relative h-64 md:h-80 flex items-center justify-center">
                    <div className="w-full h-full relative overflow-hidden">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="absolute w-full h-full object-contain transition-opacity duration-1000"
                                style={{ opacity: index === currentSlide ? 1 : 0 }}
                            />
                        ))}
                    </div>
                     {/* Carousel Controls */}
                    <div className="absolute bottom-0 right-0 flex space-x-2 p-4 z-10">
                        <button onClick={prevSlide} className="bg-white/20 hover:bg-white/40 text-white rounded-md p-2 transition-colors">
                            <LeftOutlined />
                        </button>
                        <button onClick={nextSlide} className="bg-white/20 hover:bg-white/40 text-white rounded-md p-2 transition-colors">
                            <RightOutlined />
                        </button>
                    </div>
                </div>
            </div>
            {/* Decorative background shapes */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-sky-400/20 rounded-full filter blur-3xl opacity-50"></div>
        </section>
    );
}


function App() {
  return (
    <div>
      <Navbar />
      <PromoBar/>
      <HeroSection/>
      {/* The rest of the page content will go here later */}
    </div>
  );
}

export default App;

