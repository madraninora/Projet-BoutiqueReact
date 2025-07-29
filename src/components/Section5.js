import image1 from '../components/images/f01b656c6029c2702eee5b3e2a643a85516c5ad4_e8410c1f54efa624bf35d8facf837cd17bd68f88_M229_3_img3-.png'
import image2 from '../components/images/cution.png'
import image3 from '../components/images/IMG_099.png'
import image4 from '../components/images/Celia-Wood-Ceramic-Egg-Cup-Land-Tales.png'
import image5 from '../components/images/small-oval-bamboo-box.png'
import image6 from '../components/images/301003340001_1.png'
import image7 from '../components/images/cups.png'
import image8 from '../components/images/DX0004-.png'
import image9 from '../components/images/glazed plate.png'

function Section5() {
  const products = [
    { image: image1, name: 'Tray with Foot', price: '30$' },
    { image: image2, name: 'Twill Seat Cushion', price: '30$' },
    { image: image3, name: 'Fluted Beverage Glass', price: '30$' },
    { image: image4, name: 'Ceramic Egg Cup', price: '30$' },
    { image: image5, name: 'Small Bamboo Box', price: '30$' },
    { image: image6, name: 'Metal Cutlery Basket', price: '30$' },
    { image: image7, name: '4-pack Ceramic Cups', price: '30$' },
    { image: image8, name: '2-pack Linen Napkins', price: '30$' },
    { image: image9, name: 'Glazed Stoneware Plate', price: '30$' },
  ];

  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <h2 className="text-3xl font-bold text-left text-gray-800 mb-8 w-full">TOP RATING</h2>
        {/* Grille de 9 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white flex flex-col md:flex-row h-80  overflow-hidden">
              <img src={product.image} alt={product.name} className="h-40 rounded-lg shadow-lg border border-gray-200 md:h-full w-full md:w-40 object-contain object-center" />
              <div className="flex flex-col justify-center flex-1 px-4 py-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                <div className="flex mb-1">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-gray-400 text-xl">★</span>
                </div>
                <span className="text-base font-bold text-gray-900">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Bouton Load more */}
        <div className="flex justify-center mb-10">
          <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-900 transition-colors">LOAD MORE PRODUCTS</button>
        </div>
        {/* Section newsletter */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-9">
          <div className="md:w-1/2 w-full text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">SIGN UP FOR THE NEWSLETTER</h3>
            <p className="text-gray-700 text-sm">Subscribe for the latest stories and promotions</p>
          </div>
          <form className="flex items-center w-full md:w-1/2 max-w-md justify-end">
            <input type="email" placeholder="Enter Your e-mail address" className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none" />
            <span className="inline-flex items-center px-3 py-2 bg-gray-800 text-xl rounded-r">✉️</span>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Section5;