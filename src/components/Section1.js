  import images from '../components/images/48254326-12b5-4f33-8be2-5de7764dbe95-thumbnail-770x770-70_1500x-removebg-preview.png'

      function Section1() {
  return (
    <div className='Section1'>
         {/* Section taupe */}
      <section className="w-full bg-neutral-200 h-[500px] flex items-center justify-between px-20 ">
        {/* Image à gauche */}
        <div className="flex-shrink-0">
          <img src={images} alt="Chaine" className="h-100 w-auto object-contain" />
        </div>
        {/* Texte à droite */}
        <div className="flex flex-col items-start text-left w-1/2">
          <h4 className="text-lg text-gray-950 font-bold mb-4">HOT DEALS THIS WEEK</h4>
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">SALE UP 50% <br/> MODERN FURNITURE </h1>
          <button className="mt-3 px-6 py-2 border border-black bg-neutral-200 text-black font-medium rounded hover:bg-black hover:text-[#D2B48C] transition-colors">View Now</button>
        </div>
      </section>

    </div>
  );
}

export default Section1;
   