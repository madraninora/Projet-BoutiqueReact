import furnitureCollection from "../components/images/2_aa2aa3bc-3378-4a9d-bdc6-38c5c920cc6b.webp";
import accessoriesCollection from "../components/images/TERRACOTTA-ABSTRACT-VASE_KECH-SOUK.webp";
import chairsShowcase from "../components/images/48254326-12b5-4f33-8be2-5de7764dbe95-thumbnail-770x770-70_1500x-removebg-preview.png";

function About() {
  return (
   <section className="bg-gradient-to-br from-amber-50 to-blue-50 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Image Left Column */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Intérieur épuré et minimaliste"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Right Column */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-6 leading-tight">
                About Us
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mb-8 rounded-full"></div>
              
              <p className="text-lg leading-relaxed text-stone-700 font-light">
                Notre boutique célèbre l'art de vivre avec élégance et simplicité. 
                Nous sélectionnons avec soin chaque pièce de mobilier et chaque accessoire 
                décoratif pour créer des intérieurs harmonieux. Des chaises sculpturales aux 
                délicates boîtes à bijoux, en passant par nos vases artisanaux et verres 
                raffinés, chaque objet raconte une histoire d'artisanat et de beauté 
                intemporelle. Notre philosophie ? Transformer votre espace en un havre 
                de paix où chaque détail compte.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-6 bg-rose-200/30 backdrop-blur-sm rounded-xl border border-rose-300/20">
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  Mobilier
                </h3>
                <p className="text-sm text-gray-600">
                  Chaises & Tables d'exception
                </p>
              </div>
              <div className="text-center p-6 bg-emerald-200/30 backdrop-blur-sm rounded-xl border border-emerald-300/20">
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  Accessoires
                </h3>
                <p className="text-sm text-gray-600">
                  Vases, Boîtes & Verres
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              <img
                src={furnitureCollection}
                alt="Collection de meubles"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-700/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-medium">Collection Mobilier</h3>
                  <p className="text-sm opacity-90">Design & Élégance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              <img
                src={accessoriesCollection}
                alt="Accessoires décoratifs"
                className="w-full h-64 object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-medium">Accessoires Déco</h3>
                  <p className="text-sm opacity-90">Raffinement & Style</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              <img
                src={chairsShowcase}
                alt="Exposition de chaises"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-medium">Chaises Design</h3>
                  <p className="text-sm opacity-90">Confort & Esthétique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
