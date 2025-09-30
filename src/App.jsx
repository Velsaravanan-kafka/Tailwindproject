import React from 'react';
import { Button } from 'antd';
import { useState, useEffect, useRef } from 'react'; // <-- Added useRef

import razorpay from './assets/razor.webp';

import { DownOutlined, GlobalOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';
import { CreditCardOutlined, SwapOutlined, BankOutlined, ProfileOutlined, RocketOutlined } from '@ant-design/icons';

// --- Assets (placeholders for real images) ---
const slideImage1 = "https://placehold.co/600x400/000000/FFF?text=In-Store+Payments";
const slideImage2 = "https://placehold.co/600x400/1e40af/FFF?text=Current+Account";
const slideImage3 = "https://placehold.co/600x400/166534/FFF?text=Payroll";
const slides = [slideImage1, slideImage2, slideImage3];

const contentPanels = [
    {
        id: "payments",
        title: "Accept Payments",
        cards: [
            { icon: <CreditCardOutlined />, title: "Payment Gateway", description: "Offer 100+ payment modes." },
            { icon: <SwapOutlined />, title: "Payment Links", description: "Share links to collect payments." },
            { icon: <BankOutlined />, title: "Payment Pages", description: "Create a page to collect payments." },
            { icon: <ProfileOutlined />, title: "Subscriptions", description: "Automate recurring payments." },
            { icon: <RocketOutlined />, title: "Smart Collect", description: "Reconcile NEFT/RTGS easily." },
        ]
    },
    {
        id: "payouts",
        title: "Make Payouts",
        cards: [
            { icon: <SwapOutlined />, title: "Payouts", description: "Send money to any bank account." },
            { icon: <RocketOutlined />, title: "Payout Links", description: "Send links to users to collect details." },
            { icon: <CreditCardOutlined />, title: "Vendor Payments", description: "Automate your vendor payments." },
        ]
    },
    {
        id: "banking",
        title: "Start Business Banking",
        cards: [
            { icon: <BankOutlined />, title: "Current Account", description: "Powerful account for businesses." },
            { icon: <CreditCardOutlined />, title: "Corporate Cards", description: "Manage company expenses." },
            { icon: <RocketOutlined />, title: "Capital & Credit", description: "Get loans for your business." },
        ]
    },
    {
        id: "payroll",
        title: "Automate Payroll",
        cards: [
            { icon: <ProfileOutlined />, title: "Payroll Software", description: "Automate salary disbursals." },
            { icon: <BankOutlined />, title: "Contractor Payments", description: "Pay your freelancers globally." },
        ]
    },
];

function Navbar() {
  const navLinks = [
    "Payments", "Banking+", "Payroll", "Engage", "Partners", "Resources", "Pricing"
  ];

  return(
      <nav  className='bg-slate-900 text-white w-full flex items-center justify-center h-16 shadow-lg z-50 relative'>
        <div className = 'container mx-auto flex items-center justify-between px-4'>
          <div className='flex items-center space-x-8'>
              <img src={razorpay} alt="Razorpay Logo" className='w-[120px] h-auto' />
              <ul className='hidden md:flex items-center space-x-6'>
                {navLinks.map((link)=>(
                    <li key={link}>
                      <a href='#' className='hover:text-sky-400 transition-colors'>{link}</a>
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
            <Button type='primary' className="bg-blue-500 hover:bg-blue-600">
              Sign up <RightOutlined className="align-baseline"/>
            </Button>
          </div>
        </div>
      </nav>
  );
}

function PromoBar() {
  const currencies = ['£', '€', '$', '¥', 'A$', 'د.إ'];
  return (
    <div className="bg-sky-100/70 w-full flex justify-center py-3 px-4 sm:px-0">
      <div className="container flex items-center justify-between text-sm">
        <div className="flex items-center space-x-3">
          <strong className="text-slate-800">MoneySaver</strong>
          <span className="bg-sky-200 text-sky-800 text-xs font-bold px-2 py-1 rounded-md hidden sm:block">
            Export Account
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <p className="text-slate-600">0 forex markup. 75% savings on international bank transfers!</p>
          <a href ='#' className='font-bold text-blue-600 hover:underline'>Signup</a>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          {currencies.map((currency) => (
            <div key={currency} className="w-7 h-7 rounded-full bg-slate-200/60 flex items-center justify-center font-medium text-slate-700">
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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-slate-900 text-white w-full pt-16 pb-20 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
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
                <div className="md:w-1/2 relative h-64 md:h-80 flex items-center justify-center">
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="absolute w-full h-full object-cover transition-opacity duration-1000"
                                style={{ opacity: index === currentSlide ? 1 : 0 }}
                            />
                        ))}
                    </div>
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
            <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-sky-400/20 rounded-full filter blur-3xl opacity-50"></div>
        </section>
    );
}

const StickyNav = ({ panels, activeIndex }) => {
    const navRef = useRef(null);
    const underlineRef = useRef(null);

    useEffect(() => {
        if (navRef.current && underlineRef.current) {
            const activeTab = navRef.current.children[activeIndex];
            underlineRef.current.style.left = `${activeTab.offsetLeft}px`;
            underlineRef.current.style.width = `${activeTab.offsetWidth}px`;
        }
    }, [activeIndex]);

    return (
        <nav className="sticky top-0 z-20 bg-white/70 backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto relative">
                <ul ref={navRef} className="flex items-center justify-between p-4">
                    {panels.map((panel) => (
                        <li key={panel.id} className="text-center font-medium text-gray-600 transition-colors duration-300 cursor-pointer">
                            {panel.title}
                        </li>
                    ))}
                </ul>
                <div
                    ref={underlineRef}
                    className="absolute bottom-0 h-1 bg-green-500 transition-all duration-500 ease-in-out"
                />
            </div>
        </nav>
    );
};

// 2. The Horizontal Card Scroller Component
const HorizontalCardScroller = ({ cards }) => {
    return (
        <div className="flex w-full space-x-6 pb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {cards.map((card, index) => (
                <div key={index} className="flex-shrink-0 w-64 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div className="text-3xl text-sky-500 mb-4">{card.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-500">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

// 3. The Main Feature Panel Component
const FeaturePanel = ({ panel, index }) => {
    // This is the key to the "stacking" effect.
    // Each panel is sticky. The DOM order means later panels will scroll "over" earlier ones.
    return (
        <div className="sticky top-0 h-screen w-full bg-gray-100">
            <div className="container mx-auto h-full flex flex-col justify-center p-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-8">{panel.title}</h2>
                <HorizontalCardScroller cards={panel.cards} />
            </div>
        </div>
    );
};

// --- MAIN STICKY SCROLL COMPONENT ---
function StickyScrollSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const triggerRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveIndex(parseInt(entry.target.dataset.index, 10));
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        triggerRefs.current.forEach(ref => ref && observer.observe(ref));
        return () => triggerRefs.current.forEach(ref => ref && observer.unobserve(ref));
    }, []);

    return (
        // The main wrapper is now relative to contain the Nav and Panels.
        <div className="relative">
            <StickyNav panels={contentPanels} activeIndex={activeIndex} />
            
            {/* The tall div for creating scroll height. Still need the triggers inside it. */}
            <div style={{ height: `${contentPanels.length * 100}vh` }} className="relative">
                {contentPanels.map((panel, index) => (
                    <div
                        key={`trigger-${panel.id}`}
                        ref={el => (triggerRefs.current[index] = el)}
                        data-index={index}
                        className="absolute w-full"
                        style={{ height: '100vh', top: `${index * 100}vh` }}
                    />
                ))}
            </div>
            
            {/* The Feature Panels are laid out here. */}
            {/* The stacking effect works because they are all sticky and will stack based on their order in the DOM */}
            <div className="absolute top-0 left-0 w-full">
                {contentPanels.map((panel, index) => (
                    <FeaturePanel key={panel.id} panel={panel} index={index} />
                ))}
            </div>
        </div>
    );
}

function App() {
  return (
    <div>
      <Navbar />
      <PromoBar/>
      <HeroSection/>
      
      {/* === ADD THE NEW COMPONENT HERE === */}
      <StickyScrollSection/>

      {/* === Add some content AFTER the sticky section to show it works === */}
      <div className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">The page continues to scroll normally here.</h2>
      </div>
    </div>
  );
}

export default App;