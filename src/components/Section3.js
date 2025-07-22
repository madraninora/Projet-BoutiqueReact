  import image1 from '../components/images/TERRACOTTA-ABSTRACT-VASE_KECH-SOUK.webp'
  import image2 from '../components/images/19778_8227ddd5d0-12520094_4156_2.jpg'
  import image3 from '../components/images/square-shape-clear-glass-box-brass-glass-box-jewelry-box-500x500-removebg-preview.png'
  import image4 from '../components/images/IMG_7008_530x_2x-removebg-preview.png'
  import image5 from '../components/images/glass box.png'
  import image6 from '../components/images/jute-removebg-preview.png'
  import image7 from '../components/images/014046_ind-removebg-preview.png'
  import image8 from '../components/images/images-removebg-preview.png'

      function Section3() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 mb-8">
      {/* Première ligne de 4 cartes */}
      <div className="grid grid-cols-4 gap-8 w-full max-w-6xl px-4 mb-8">
        {/* Carte 1 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <div className="w-full h-[200px] overflow-hidden group">
            <img src={image1} alt="Produit 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Decor</h3>
            <p className="text-sm text-gray-600 mb-4">lorem ipsum Decor</p>
            <button className="mt-auto px-5 py-2 border border-black bg-transparent text-black font-medium rounded hover:bg-black hover:text-white transition-colors">View All</button>
          </div>
        </div>
        {/* Carte 2 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <img src={image2} alt="Produit 2" className="w-full h-[180px] object-cover" />
          <div className="p-5 flex flex-col flex-1 items-center">
            <h5 className="text-lg font-semibold mb-2 text-gray-900">Linen Beach Towel</h5>
            <div className="flex mb-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-400 text-xl">★</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">30$</h3>
          </div>
        </div>
        {/* Carte 3 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <img src={image3} alt="Produit 3" className="w-full h-[180px] object-cover" />
          <div className="p-5 flex flex-col flex-1 items-center">
            <h5 className="text-lg font-semibold mb-2 text-gray-900">Squar Clear Glass Box</h5>
            <div className="flex mb-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-400 text-xl">★</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">30$</h3>
          </div>
        </div>
        {/* Carte 4 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <img src={image4} alt="Produit 4" className="w-full h-[180px] object-cover" />
          <div className="p-5 flex flex-col flex-1 items-center">
            <h5 className="text-lg font-semibold mb-2 text-gray-900">4-pack Small Ceramic Plates</h5>
            <div className="flex mb-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-400 text-xl">★</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">30$</h3>
          </div>
        </div>
      </div>
      {/* Deuxième ligne de 4 cartes */}
      <div className="grid grid-cols-4 gap-8 w-full max-w-6xl px-4"> 
        {/* Carte 5 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <img src={image5} alt="Produit 6" className="w-full h-[180px] object-cover" />
          <div className="p-5 flex flex-col flex-1 items-center">
            <h5 className="text-lg font-semibold mb-2 text-gray-900">Large Clear Glass Box</h5>
            <div className="flex mb-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-400 text-xl">★</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">30$</h3>
          </div>
        </div>
        {/* Carte 6 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <img src={image6} alt="Produit 7" className="w-full h-[180px] object-cover" />
          <div className="p-5 flex flex-col flex-1 items-center">
            <h5 className="text-lg font-semibold mb-2 text-gray-900">Round Jute Placemat</h5>
            <div className="flex mb-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-400 text-xl">★</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">30$</h3>
          </div>
        </div>
        {/* Carte 7 */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <img src={image7} alt="Produit 8" className="w-full h-[180px] object-cover" />
          <div className="p-5 flex flex-col flex-1 items-center">
            <h5 className="text-lg font-semibold mb-2 text-gray-900">Metal Wire Basket</h5>
            <div className="flex mb-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-gray-400 text-xl">★</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">30$</h3>
          </div>
        </div>
            {/* Carte 8 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-[400px]">
          <div className="w-full h-[200px] overflow-hidden group">
            <img src={image8} alt="Produit 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Boho Chic</h3>
            <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor</p>
            <button className="mt-auto px-5 py-2 border border-black bg-transparent text-black font-medium rounded hover:bg-black hover:text-white transition-colors">View All</button>
          </div>
        </div>
      </div>
    </div>

    
    );
}

export default Section3;