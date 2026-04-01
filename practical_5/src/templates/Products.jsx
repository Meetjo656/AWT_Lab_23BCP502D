import React, { useState } from "react";

const ALL_PRODUCTS = [
    // ── Coffee Mugs ────────────────────────────────────────────────
    { id: 1, name: "Classic White Ceramic", price: 18, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80" },
    { id: 2, name: "Pink Premium Ceramic", price: 99, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80" },
    { id: 3, name: "Matte Black Espresso Mug", price: 29, category: "Coffee Mugs", sale: true, img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=500&q=80" },
    { id: 4, name: "Rustic Brown Stoneware", price: 35, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80" },
    { id: 5, name: "Speckled Grey Handmade", price: 42, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=500&q=80" },
    { id: 6, name: "Navy Blue Double-Wall", price: 55, category: "Coffee Mugs", sale: true, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80" },
    { id: 7, name: "Terracotta Sunrise Mug", price: 22, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=500&q=80" },
    { id: 8, name: "Marble Effect Ceramic", price: 47, category: "Coffee Mugs", sale: true, img: "https://images.unsplash.com/photo-1512568400610-9d9cb78e6339?w=500&q=80" },
    { id: 9, name: "Forest Green Handle", price: 31, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1521302200778-33500795e128?w=500&q=80" },
    { id: 10, name: "Minimalist Scandinavian", price: 38, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=500&q=80" },
    { id: 11, name: "Vintage Floral Pattern", price: 26, category: "Coffee Mugs", sale: true, img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80" },
    { id: 12, name: "Latte Art Edition", price: 52, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&q=80" },
    { id: 13, name: "Geometric Gold Rim", price: 65, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=500&q=80" },
    { id: 14, name: "Ombre Sunrise Mug", price: 33, category: "Coffee Mugs", sale: true, img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80" },
    { id: 15, name: "Workshop Throwback", price: 27, category: "Coffee Mugs", sale: false, img: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=500&q=80" },

    // ── Tea Mugs ───────────────────────────────────────────────────
    { id: 16, name: "Japanese Matcha Cup", price: 39, category: "Tea Mugs", sale: false, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80" },
    { id: 17, name: "Celadon Green Teacup", price: 45, category: "Tea Mugs", sale: false, img: "https://images.unsplash.com/photo-1440439371010-ef9a7f8dfc8e?w=500&q=80" },
    { id: 18, name: "Bamboo Handle Zen Cup", price: 28, category: "Tea Mugs", sale: true, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" },
    { id: 19, name: "Porcelain Blossom Cup", price: 61, category: "Tea Mugs", sale: false, img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&q=80" },
    { id: 20, name: "Cream Ribbed Teacup", price: 24, category: "Tea Mugs", sale: false, img: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=500&q=80" },
    { id: 21, name: "Indigo Blue Wide Rim", price: 36, category: "Tea Mugs", sale: true, img: "https://images.unsplash.com/photo-1564890369478-c89ca3d9cde9?w=500&q=80" },
    { id: 22, name: "Earl Grey Glow Mug", price: 41, category: "Tea Mugs", sale: false, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80" },
    { id: 23, name: "Vintage English Teacup", price: 57, category: "Tea Mugs", sale: false, img: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=500&q=80" },

    // ── Premium ────────────────────────────────────────────────────
    { id: 24, name: "Golden Designers Mug", price: 120, category: "Premium", sale: true, img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&q=80" },
    { id: 25, name: "24K Gold Rim Porcelain", price: 155, category: "Premium", sale: false, img: "https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=500&q=80" },
    { id: 26, name: "Hand-Painted Artisan Mug", price: 140, category: "Premium", sale: false, img: "https://images.unsplash.com/photo-1575650772416-eb5e3b3e5971?w=500&q=80" },
    { id: 27, name: "Crystalline Glaze Series", price: 175, category: "Premium", sale: true, img: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=500&q=80" },
    { id: 28, name: "Obsidian Lava Mug", price: 195, category: "Premium", sale: false, img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=500&q=80" },
    { id: 29, name: "Royal Cobalt Blue", price: 130, category: "Premium", sale: false, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80" },
    { id: 30, name: "Ivory & Platinum Edition", price: 210, category: "Premium", sale: true, img: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=500&q=80" },
    { id: 31, name: "Wabi-Sabi Kintsugi Mug", price: 160, category: "Premium", sale: false, img: "https://images.unsplash.com/photo-1512568400610-9d9cb78e6339?w=500&q=80" },

    // ── Others ─────────────────────────────────────────────────────
    { id: 32, name: "Red Love Cup", price: 25, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80" },
    { id: 33, name: "B&W Essentials Mug", price: 19, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=500&q=80" },
    { id: 34, name: "Rainbow Gradient Cup", price: 21, category: "Others", sale: true, img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80" },
    { id: 35, name: "Chalkboard Label Mug", price: 17, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=500&q=80" },
    { id: 36, name: "Travel Tumbler Pro", price: 48, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=500&q=80" },
    { id: 37, name: "Succulents & Coffee Set", price: 44, category: "Others", sale: true, img: "https://images.unsplash.com/photo-1521302200778-33500795e128?w=500&q=80" },
    { id: 38, name: "Star Map Night Mug", price: 32, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80" },
    { id: 39, name: "Typewriter Coffee Cup", price: 23, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=500&q=80" },
    { id: 40, name: "Watercolor Bloom Mug", price: 29, category: "Others", sale: true, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80" },
    { id: 41, name: "Astronaut Space Mug", price: 34, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1440439371010-ef9a7f8dfc8e?w=500&q=80" },
    { id: 42, name: "City Skyline Handle Mug", price: 27, category: "Others", sale: false, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" },
];

const CATEGORIES = ["All Products", "Coffee Mugs", "Tea Mugs", "Premium", "Others"];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [cart, setCart] = useState([]);
    const [addedId, setAddedId] = useState(null);

    const filtered =
        activeCategory === "All Products"
            ? ALL_PRODUCTS
            : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

    const handleAdd = (product) => {
        setCart((prev) => [...prev, product]);
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 1200);
    };

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* ── Navbar ── */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                    <h1 className="text-lg font-semibold tracking-wide">CoffeeStyle.</h1>
                    <nav className="hidden md:flex gap-8 text-sm tracking-wider text-gray-600">
                        <a href="/" className="hover:text-black">HOME</a>
                        <a href="/products" className="text-black font-semibold border-b-2 border-black pb-0.5">OUR PRODUCTS</a>
                        <a href="#" className="hover:text-black">BLOG</a>
                        <a href="#" className="hover:text-black">ABOUT</a>
                        <a href="#" className="hover:text-black">CONTACT</a>
                    </nav>
                    <div className="text-sm text-gray-600 font-medium">
                        CART ({cart.length})
                    </div>
                </div>
            </header>

            {/* ── Page Hero ── */}
            <section className="bg-[#0a0f2c] text-white py-20 text-center">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Browse our collection</p>
                <h2 className="text-4xl font-semibold">Our Products</h2>
                <p className="text-gray-300 mt-3 text-sm max-w-lg mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </section>

            {/* ── Category Filters ── */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 flex gap-2 py-4 flex-wrap">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 text-xs tracking-widest uppercase transition border ${activeCategory === cat
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Product Grid ── */}
            <main className="max-w-6xl mx-auto px-6 py-14">
                <p className="text-xs text-gray-400 mb-8 tracking-wide">
                    Showing <span className="text-black font-medium">{filtered.length}</span> products
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12">
                    {filtered.map((product) => (
                        <div key={product.id} className="group relative">
                            {/* Sale badge */}
                            {product.sale && (
                                <span className="absolute top-3 left-3 z-10 bg-white text-black text-[10px] px-2 py-0.5 tracking-widest shadow">
                                    On Sale.
                                </span>
                            )}

                            {/* Product image */}
                            <div className="overflow-hidden relative">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Add to cart overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={() => handleAdd(product)}
                                        className="bg-white text-black text-xs px-5 py-2 tracking-widest hover:bg-black hover:text-white transition"
                                    >
                                        {addedId === product.id ? "✓ ADDED" : "ADD TO CART"}
                                    </button>
                                </div>
                            </div>

                            {/* Product info */}
                            <div className="mt-4 text-center">
                                <h3 className="text-sm text-gray-800">{product.name}</h3>
                                <p className={`text-sm mt-1 ${product.sale ? "text-red-500" : "text-gray-500"}`}>
                                    ${product.price.toFixed(2)} USD
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* ── Footer ── */}
            <footer className="bg-[#0a0f2c] text-white py-16 mt-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                    <div>
                        <h4 className="font-semibold mb-4 tracking-wide">CoffeeStyle.</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Delivering the best coffee life since 1996.<br />
                            From coffee geeks to the real ones.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4 tracking-widest uppercase text-gray-400">Pages</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {["Home", "Our Products", "About", "Contact"].map((l) => (
                                <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4 tracking-widest uppercase text-gray-400">Contact</h4>
                        <p className="text-sm text-gray-300">us@coffeestyle.io</p>
                        <p className="text-sm text-gray-400 mt-1">We're Always Happy to Help</p>
                        <div className="flex gap-4 mt-5 text-gray-400 text-sm">
                            {["Facebook", "Instagram", "Pinterest", "Twitter"].map((s) => (
                                <a key={s} href="#" className="hover:text-white transition">{s.slice(0, 2)}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-600 text-xs mt-12">
                    CoffeeStyle Inc. © 1996 — Built with React + Tailwind
                </p>
            </footer>

        </div>
    );
}
