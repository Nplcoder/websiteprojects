const Footer = () => {
    return (
      <footer className="bg-gradient-to-br from-[#051952] to-[#08307a] text-white py-10 px-4 sm:px-8 text-xs overflow-hidden">
        {/* Main Footer Row */}
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap sm:flex-row justify-between items-start gap-2 lg:gap-12 overflow-x-auto sm:overflow-visible">

  
            {/* Logo & Description */}
            <div className="min-w-[220px] max-w-[300px] flex-shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-lime-500 p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
                    <path d="M12 22l9-5-2.18-1.09L12 19l-6.82-3.09L3 17l9 5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-semibold">MPP</h2>
                  <p className="text-[11px] text-white/80">Modern Paper Products</p>
                </div>
              </div>
              <p className="text-white/80 mb-3 text-[11px] leading-relaxed max-w-xs">
                Excellence in paper manufacturing since 1959. We deliver premium paper bags, sandwich
                wrapping paper, and disposable products with unmatched quality.
              </p>
              <p className="text-lime-400 font-medium text-[11px]">
                "Name of Quality In Quantity"
              </p>
            </div>
  

  
            {/* Quick Links */}
            <div className="min-w-[150px] max-w-[200px] flex-shrink-0">
              <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-white/80 text-[11px]">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="min-w-[180px] max-w-[240px] flex-shrink-0">
              <h3 className="text-sm font-semibold mb-3">Contact Info</h3>
              <ul className="space-y-3 text-white/80 text-[11px]">
                <li className="flex items-start gap-2">
                  <span className="text-lime-400">📍</span>
                  <span>United Arab Emirates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400">📞</span>
                  <div>
                    <div>+971 56 262 4470</div>
                    <div>+971 393 1341</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-400">✉️</span>
                  <div>
                    <div>mpp.industry@gmail.com</div>
                    <div>mpp@modernpaperproduct.com</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-4 text-white/70 text-[10px] text-center flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© 2024 Modern Paper Product Industry LLC. All rights reserved.</p>
            <p>Founded: 1959 • UAE Based • ISO Certified</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  