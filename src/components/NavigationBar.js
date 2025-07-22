const NavigationBar = () => {
  const navItems = [
    "HOME",
    "STORE", 
    "ACCESSORIES",
    "BRAND",
    "PAGES",
    "ABOUT US",
    "NEWS",
    "CONTACT US"
  ];

  return (
    <nav className="w-full bg-navbar">
      {/* Navigation Menu */}
      <div className="flex items-center justify-center py-4">
        <ul className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className="text-navbar-foreground font-bold text-sm hover:text-navbar-accent transition-colors duration-200 hover:bg-navbar-hover px-3 py-2 rounded"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Separator line 75% width */}
      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-navbar-border border-t-1 my-1 border-gray-500 "></div>
      </div>
    </nav>
  );
};

export default NavigationBar;