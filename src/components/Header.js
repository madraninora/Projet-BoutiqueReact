
import { Search, User, ShoppingCart, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-navbar">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-20 py-4">
        {/* Company Name */}
        <div className="text-2xl font-bold text-navbar-foreground">
          MOODY STUDIO
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-navbar-hover rounded-full transition-colors">
            <Search className="w-5 h-5 text-navbar-foreground" />
          </button>
          <button className="p-2 hover:bg-navbar-hover rounded-full transition-colors">
            <User className="w-5 h-5 text-navbar-foreground" />
          </button>
          <button className="p-2 hover:bg-navbar-hover rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5 text-navbar-foreground" />
          </button>
          <button className="p-2 hover:bg-navbar-hover rounded-full transition-colors">
            <Heart className="w-5 h-5 text-navbar-foreground" />
          </button>
        </div>
      </div>

   

      {/* Separator line 75% width */}
      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-navbar-border border-t-1 my-1 border-gray-500"></div>
      </div>
    </header>
  );
};

export default Header;