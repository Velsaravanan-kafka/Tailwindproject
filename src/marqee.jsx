import React from 'react';

// You would replace these placeholders with your actual logo assets
const brandLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a2/Swiggy_logo.svg",
    "https://asset.brandfetch.io/idQ6VFt_o4/id52l-fl1q.svg",
    "https://asset.brandfetch.io/id20mY26C_/id_b03s91S.svg",
    "https://asset.brandfetch.io/idq5d2s0OD/id41t3vr7m.svg",
    "https://asset.brandfetch.io/id8D09a-dZ/idGF3-ODgr.svg",
    "https://asset.brandfetch.io/idj91aK1lS/id97rqc3z0.svg",
    "https://asset.brandfetch.io/idOaBc252g/idMiztJ03M.svg",
];

function BrandsMarquee() {
  return (
    <section className="bg-white py-12 w-full">
      {/* 1. The main container is the "window" that hides the overflow */}
      <div className="relative w-full overflow-hidden">
        {/* 2. The inner container holds the logos and is animated */}
        <div className="flex animate-marquee">
          {/* 3. We render the logos TWICE for the seamless loop effect */}
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-10 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Brand logo ${index + 1}`} 
                className="h-8 object-contain"   // Control the height of the logos
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsMarquee;