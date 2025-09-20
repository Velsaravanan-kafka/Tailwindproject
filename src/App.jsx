import React from 'react';
import { Button } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
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

function Navbar() {
  const navLinks = [
    "Payments", "Banking+", "Payroll", "Engage", "Partners", "Resources", "Pricing"
  ];

  return(
      <nav className='bg-red-400 w-full flex items-center justify-center h-16 shadow-lg'>
        <div className = 'container mx-auto flex items-center justify-between px-4'>
          <div className='flex items-center space-x-8'>
             <img src={razorpay} className='w-[120px] h-[120px]'/>
             <ul className='flex items-center space-x-6'>
              {navLinks.map((link)=>(
                  <li key={link}>
                    <a href='#' className='hover:text-purple-700'>{link}</a>
                    </li>
              ))}
             </ul>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
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

function App() {
  return (
    <div>
      <Navbar />
      {/* The rest of the page content will go here later */}
    </div>
  );
}

export default App;

