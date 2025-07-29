import imageBg1 from '../components/images/TERRACOTTA-ABSTRACT-VASE_KECH-SOUK.webp';
import imageBg2 from '../components/images/images-removebg-preview.png';
import image2 from '../components/images/19778_8227ddd5d0-12520094_4156_2.jpg';
import image3 from '../components/images/square-shape-clear-glass-box-brass-glass-box-jewelry-box-500x500-removebg-preview.png';
import image4 from '../components/images/IMG_7008_530x_2x-removebg-preview.png';
import image5 from '../components/images/glass box.png';
import image6 from '../components/images/jute-removebg-preview.png';
import image7 from '../components/images/014046_ind-removebg-preview.png'


const cardData = [
  {
    image: image2,
    title: 'Linen Beach Towel',
    price: '30$',
  },
  {
    image: image3,
    title: 'Squar Clear Glass Box',
    price: '30$',
  },
  {
    image: image4,
    title: 'Ceramic Plates',
    price: '30$',
  },
  {
    image: image5,
    title: 'Large Glass Box',
    price: '30$',
  },
  {
    image: image6,
    title: 'Jute Placemat',
    price: '30$',
  },
  {
    image: image7,
    title: 'Wire Basket',
    price: '30$',
  },
];

function Section3() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Première carte */}
        <div className="relative h-[400px] rounded-xl overflow-hidden flex items-center justify-center shadow-lg border border-gray-200 bg-gray-100">
          <img src={imageBg1} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30 px-4">
            <h3 className="text-2xl font-bold text-white mb-2">Boho Chic</h3>
            <p className="text-white text-sm mb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <button className="px-6 py-2 bg-transparent border border-white text-white font-semibold rounded shadow hover:bg-white hover:text-black transition-colors">View All</button>
          </div>
        </div>
        {/* 6 cartes centrales */}
        {cardData.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center overflow-hidden h-[400px]">
            <img src={card.image} alt={card.title} className="w-full h-[230px] object-contain object-center" />
            <div className="p-4 flex-1 w-full relative">
              <div className="absolute left-4 bottom-4 flex flex-col items-start gap-2">
                <h5 className="text-lg font-semibold text-gray-900">{card.title}</h5>
                <div className="flex">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-gray-400 text-xl">★</span>
                </div>
                <span className="text-xl font-bold text-gray-900">{card.price}</span>
              </div>
            </div>
          </div>
        ))}
        {/* Dernière carte */}
        <div className="relative h-[400px] rounded-xl overflow-hidden flex items-center justify-center shadow-lg border border-gray-200 bg-gray-100">
          <img src={imageBg2} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30 px-4">
            <h3 className="text-2xl font-bold text-white mb-2">Boho Chic</h3>
            <p className="text-white text-sm mb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <button className="px-6 py-2 bg-transparent border border-white text-white font-semibold rounded shadow hover:bg-white hover:text-black transition-colors">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;