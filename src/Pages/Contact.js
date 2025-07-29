function Contact() {
  return (
     <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Contactez-nous</h2>
          <p className="text-gray-600">Une question ? Nous sommes là pour vous aider</p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border border-pink-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-pink-50/50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                required
              />
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-pink-50/50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Sujet"
              className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-pink-50/50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
              required
            />

            <textarea
              placeholder="Votre message..."
              rows={5}
              className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-pink-50/50 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-medium py-3 px-6 rounded-2xl hover:from-rose-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
