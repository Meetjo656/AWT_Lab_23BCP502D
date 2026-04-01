import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ================= NAVBAR ================= */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-lg font-semibold tracking-wide">
            CoffeeStyle.
          </h1>

          <nav className="hidden md:flex gap-8 text-sm tracking-wider text-gray-600">
            <a href="#" className="hover:text-black">HOME</a>
            <a href="#" className="hover:text-black">OUR PRODUCTS</a>
            <a href="#" className="hover:text-black">BLOG</a>
            <a href="#" className="hover:text-black">ABOUT</a>
            <a href="#" className="hover:text-black">CONTACT</a>
            <a href="#" className="hover:text-black">STYLEGUIDE</a>
          </nav>

          <div className="text-sm text-gray-600">
            CART (0)
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-[#0a0f2c] text-white py-28 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <p className="uppercase tracking-widest text-xs mb-4 text-gray-300">
            Best place to buy design
          </p>

          <h2 className="text-5xl font-semibold mb-6">
            Coffee Mugs
          </h2>

          <p className="text-gray-300 mb-8">
            The most versatile furniture system ever created.
            Designed to fit your life, made to move and grow.
          </p>

          <button className="bg-white text-black px-6 py-3 text-sm tracking-widest hover:bg-gray-200 transition">
            EXPLORE OUR PRODUCTS
          </button>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="text-center py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl text-gray-800 mb-6">
            Even the all-powerful Pointing has no control about the blind texts.
          </h3>

          <p className="text-gray-500 text-sm leading-7 mb-6">
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far world of Grammar.
          </p>

          <a href="#" className="text-sm underline text-gray-600 hover:text-black">
            Read the full story
          </a>
        </div>
      </section>

      {/* ================= FEATURED MUGS ================= */}
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-gray-500">
            — FEATURED MUGS —
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Product 1 */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="Pink Premium Ceramic"
              className="w-full h-[400px] object-cover"
            />
            <h4 className="mt-6 text-gray-800">Pink Premium Ceramic</h4>
            <p className="text-sm text-gray-500">$99.00 USD</p>
          </div>

          {/* Product 2 */}
          <div className="text-center relative">
            <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 shadow">
              On Sale.
            </span>

            <img
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096"
              alt="Golden Designers Mug"
              className="w-full h-[400px] object-cover"
            />
            <h4 className="mt-6 text-gray-800">Golden Designers Mug</h4>
            <p className="text-sm text-red-500">$50.00 USD</p>
          </div>

        </div>
      </section>

      {/* ================= MORE PRODUCTS ================= */}
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-gray-500">
            — MORE PRODUCTS —
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {[
            {
              name: "Red Love Cup",
              price: "$25.00",
              img: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
            },
            {
              name: "Black Tea Cup",
              price: "$15.00",
              img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9"
            },
            {
              name: "B&W Essentials Mug",
              price: "$19.00",
              img: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1"
            }
          ].map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[320px] object-cover"
              />
              <h4 className="mt-4 text-gray-800">{product.name}</h4>
              <p className="text-sm text-gray-500">{product.price} USD</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}