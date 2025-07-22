      import images from '../components/images/610.40.003-Porto-Chaise-Exterieur_SITE_A1_V1_BLANC-removebg-preview.png'
      import image from '../components/images/Soona_ALI-QLX-MEDIVASE-TC_2-2024_web_2-removebg-preview.png'
     function Section2() {
  return (
    <div className="w-full flex justify-center mt-5 mb-5">
      <div className="flex gap-8 w-full max-w-6xl">
        {/* Carte gauche */}
        <div className="w-1/2 h-[300px] bg-gray-100 flex items-center justify-center">
          <div className="flex items-center h-full w-full">
            <img src={images} alt="Chaise" className="w-1/2 h-full object-contain rounded-lg" />
            <div className="w-1/2 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">INY VINTAGE CHAIR</h3>
              <button className="px-5 py-2 border border-black bg-transparent text-black font-medium rounded hover:bg-black hover:text-[#D2B48C] transition-colors">VIEW DETAILS</button>
            </div>
          </div>
        </div>
        {/* Carte droite */}
        <div className="w-1/2 h-[300px] bg-gray-100 flex items-center justify-center">
          <div className="flex items-center h-full w-full">
            <img src={image} alt="Chaise" className="w-1/2 h-full object-contain rounded-lg" />
            <div className="w-1/2 flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">LARGE TERRACOTA <br/> VASE </h3>
              <button className="px-5 py-2 border border-black bg-transparent text-black font-medium rounded hover:bg-black hover:text-[#D2B48C] transition-colors">VIEW DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
