import image from '../components/images/2_aa2aa3bc-3378-4a9d-bdc6-38c5c920cc6b.webp';


function Section4() {
  return (
    <div
      className="w-full h-[500px] relative flex items-center justify-center mb-6"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex items-center justify-start w-full h-full">
        <div className="w-[400px] h-[250px] bg-white opacity-70 shadow-lg flex flex-col items-center justify-center ml-20 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">BEDSHEET SETS</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg text-gray-900">$50.00</span>
            <span className="text-lg text-gray-500 line-through">$220.00</span>
          </div>
          <p className="text-sm text-gray-700 mb-4 text-center">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
          <button className="px-5 py-2 border border-black bg-transparent text-black font-medium rounded hover:bg-black hover:text-white transition-colors">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Section4;