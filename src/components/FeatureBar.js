import { Truck, Mail, Headphones } from "lucide-react";

const FeatureBar = () => {
  const features = [
    {
      icon: Truck,
      text: "FREE SHIPPING"
    },
    {
      icon: Mail,
      text: "100% MONEY BACK"
    },
    {
      icon: Headphones,
      text: "SUPPORT 24/7"
    }
  ];

  return (
    <div className="w-full bg-navbar">
      {/* Features */}
      <div className="flex items-center justify-center py-4">
        <div className="w-full flex items-center justify-around space-x-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <feature.icon className="w-5 h-5 text-amber-400 text-navbar-accent" />
              <span className="text-navbar-foreground font-medium text-sm">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Full width separator line */}
      <div className="w-full h-px bg-navbar-border border-t-1 border-gray-500"></div>
    </div>
  );
};

export default FeatureBar;