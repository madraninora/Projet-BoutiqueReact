function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white pt-12 pb-4 w-full overflow-x-hidden">
        <div className="w-full max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row justify-around gap-8">
          {/* Section 1 */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <h3 className="text-xl font-bold mb-2">Urban Outfitters</h3>
            <p className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br/> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="text-xs mb-1">123 Main Street, City, Country</div>
            <div className="text-xs mb-1">+1 234 567 890</div>
            <div className="text-xs mb-2">contact@urbanoutfitters.com</div>
            <div className="flex flex-row gap-15 mt-2">
              <a href="#" className="hover:text-blue-400" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"></path></svg>
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0016.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.044.762.127 1.124C7.728 8.77 4.1 6.797 1.671 3.149c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"></path></svg>
              </a>
              <a href="#" className="hover:text-pink-400" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608C4.517 2.497 5.784 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.324A4.162 4.162 0 017.838 12 4.162 4.162 0 0112 7.838 4.162 4.162 0 0116.162 12 4.162 4.162 0 0112 16.162zm4.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path></svg>
              </a>
              <a href="#" className="hover:text-red-500" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.671 3.5 12 3.5 12 3.5s-7.671 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 7.9 0 12 0 12s0 4.1.502 5.814a2.994 2.994 0 002.112 2.112C4.329 20.5 12 20.5 12 20.5s7.671 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 16.1 24 12 24 12s0-4.1-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"></path></svg>
              </a>
            </div>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col gap-3 min-w-[150px]">
            <h3 className="text-lg font-bold mb-2">Shopping</h3>
            <a href="#" className="hover:underline">Your Cart</a>
            <a href="#" className="hover:underline">Your Orders</a>
            <a href="#" className="hover:underline">Compared Items</a>
            <a href="#" className="hover:underline">Wishlist Items</a>
            <a href="#" className="hover:underline">Shipping Detail</a>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col gap-3 min-w-[150px]">
            <h3 className="text-lg font-bold mb-2">More Links</h3>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Gift Center</a>
            <a href="#" className="hover:underline">Buying Guides</a>
            <a href="#" className="hover:underline">New Arrivals</a>
            <a href="#" className="hover:underline">Clearance</a>
          </div>
          {/* Section 4 */}
          <div className="flex flex-col gap-3 min-w-[220px] mb-8">
            <h3 className="text-lg font-bold mb-2">From the Blog</h3>
            <div className="mb-4">
              <div className="text-lg text-gray-400 mb-1">26 May</div>
              <p className="text-sm mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod.</p>
              <div className="text-xs text-gray-400 mb-1">3 comments</div>
              <hr className="border-t border-gray-500 my-3" />
              <div className="text-lg text-gray-400 mb-1">27 May</div>
              <p className="text-sm mb-1">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="text-xs text-gray-400 mb-1">3 comments</div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black text-white text-center py-3">
        Urban Outfitters © – All rights reserved  
      </div>
    </>
  );
}

export default Footer;