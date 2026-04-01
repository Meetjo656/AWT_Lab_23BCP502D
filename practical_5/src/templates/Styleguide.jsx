import React, { useState } from "react";

const COLORS = [
    { name: "Midnight Navy", hex: "#0a0f2c", text: "white" },
    { name: "Charcoal Black", hex: "#111111", text: "white" },
    { name: "Stone Grey", hex: "#6b7280", text: "white" },
    { name: "Warm Sand", hex: "#e5e0d8", text: "black" },
    { name: "Cloud White", hex: "#f9f9f9", text: "black" },
    { name: "Espresso Brown", hex: "#3b1f0e", text: "white" },
    { name: "Cream Latte", hex: "#f5efe6", text: "black" },
    { name: "Copper Gold", hex: "#b87333", text: "white" },
];

const TYPESCALE = [
    { label: "Display", size: "text-5xl", weight: "font-semibold", sample: "Coffee is life." },
    { label: "H1", size: "text-4xl", weight: "font-semibold", sample: "Our Products" },
    { label: "H2", size: "text-3xl", weight: "font-semibold", sample: "About CoffeeStyle" },
    { label: "H3", size: "text-2xl", weight: "font-semibold", sample: "Let's Connect" },
    { label: "H4", size: "text-xl", weight: "font-medium", sample: "Pink Premium Ceramic" },
    { label: "Body", size: "text-base", weight: "font-normal", sample: "It is a paradisematic country, in which roasted parts of sentences fly." },
    { label: "Caption", size: "text-sm", weight: "font-normal", sample: "$99.00 USD — On Sale" },
    { label: "Label", size: "text-xs", weight: "font-semibold", sample: "OUR PRODUCTS" },
];

const BUTTONS = [
    { label: "Primary", cls: "bg-black text-white hover:bg-gray-800" },
    { label: "Outline", cls: "border border-black text-black hover:bg-black hover:text-white" },
    { label: "Ghost", cls: "text-gray-600 underline hover:text-black" },
    { label: "Danger", cls: "bg-red-500 text-white hover:bg-red-600" },
    { label: "Disabled", cls: "bg-gray-200 text-gray-400 cursor-not-allowed" },
];

const INPUTS = [
    { label: "Text Input", type: "text", placeholder: "Your name" },
    { label: "Email Input", type: "email", placeholder: "your@email.com" },
    { label: "Password", type: "password", placeholder: "••••••••" },
];

export default function Styleguide() {
    const [tab, setTab] = useState("Colors");
    const tabs = ["Colors", "Typography", "Buttons", "Inputs", "Cards", "Badges"];

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* ── Navbar ── */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                    <h1 className="text-lg font-semibold tracking-wide">CoffeeStyle.</h1>
                    <nav className="hidden md:flex gap-8 text-sm tracking-wider text-gray-600">
                        <a href="/" className="hover:text-black">HOME</a>
                        <a href="/products" className="hover:text-black">OUR PRODUCTS</a>
                        <a href="#" className="hover:text-black">BLOG</a>
                        <a href="/about" className="hover:text-black">ABOUT</a>
                        <a href="/contact" className="hover:text-black">CONTACT</a>
                        <a href="/styleguide" className="text-black font-semibold border-b-2 border-black pb-0.5">STYLEGUIDE</a>
                    </nav>
                    <div className="text-sm text-gray-600 font-medium">CART (0)</div>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className="bg-[#0a0f2c] text-white py-24 text-center">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Design system</p>
                <h2 className="text-5xl font-semibold">Styleguide</h2>
                <p className="text-gray-300 mt-4 text-sm max-w-lg mx-auto">
                    A reference for all UI tokens, components, and patterns used across CoffeeStyle.
                </p>
            </section>

            {/* ── Tab Bar ── */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 flex gap-2 py-4 flex-wrap">
                    {tabs.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-5 py-2 text-xs tracking-widest uppercase transition border ${tab === t
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Content ── */}
            <main className="max-w-5xl mx-auto px-6 py-16">

                {/* COLORS */}
                {tab === "Colors" && (
                    <div>
                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-8">— Color Palette —</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {COLORS.map((c) => (
                                <div key={c.name}>
                                    <div
                                        className="w-full h-28 rounded mb-3 shadow-sm"
                                        style={{ backgroundColor: c.hex }}
                                    />
                                    <p className="text-sm font-medium text-gray-800">{c.name}</p>
                                    <p className="text-xs text-gray-400 font-mono">{c.hex}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TYPOGRAPHY */}
                {tab === "Typography" && (
                    <div className="space-y-8">
                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-8">— Type Scale —</h3>
                        {TYPESCALE.map((t) => (
                            <div key={t.label} className="border-b border-gray-100 pb-6 flex items-baseline gap-8">
                                <span className="text-xs text-gray-400 w-16 shrink-0 tracking-widest uppercase">{t.label}</span>
                                <p className={`${t.size} ${t.weight} text-gray-800`}>{t.sample}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* BUTTONS */}
                {tab === "Buttons" && (
                    <div>
                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-8">— Button Variants —</h3>
                        <div className="flex flex-wrap gap-4 mb-12">
                            {BUTTONS.map((b) => (
                                <button
                                    key={b.label}
                                    className={`px-6 py-2.5 text-sm tracking-wider transition ${b.cls}`}
                                    disabled={b.label === "Disabled"}
                                >
                                    {b.label}
                                </button>
                            ))}
                        </div>

                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-6">— Button Sizes —</h3>
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-black text-white text-xs px-4 py-1.5 tracking-widest hover:bg-gray-800 transition">SM</button>
                            <button className="bg-black text-white text-sm px-5 py-2.5 tracking-widest hover:bg-gray-800 transition">MD</button>
                            <button className="bg-black text-white text-base px-7 py-3 tracking-widest hover:bg-gray-800 transition">LG</button>
                            <button className="bg-black text-white text-lg px-9 py-4 tracking-widest hover:bg-gray-800 transition">XL</button>
                        </div>
                    </div>
                )}

                {/* INPUTS */}
                {tab === "Inputs" && (
                    <div>
                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-8">— Form Controls —</h3>
                        <div className="space-y-8 max-w-md">
                            {INPUTS.map((inp) => (
                                <div key={inp.label}>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">{inp.label}</label>
                                    <input
                                        type={inp.type}
                                        placeholder={inp.placeholder}
                                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm bg-transparent"
                                    />
                                </div>
                            ))}
                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-wider">Textarea</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter your message..."
                                    className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm bg-transparent resize-none"
                                />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" defaultChecked />
                                <span>Checkbox — checked state</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* CARDS */}
                {tab === "Cards" && (
                    <div>
                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-8">— Card Variants —</h3>
                        <div className="grid sm:grid-cols-3 gap-8">

                            {/* Product card */}
                            <div className="group relative text-center">
                                <span className="absolute top-3 left-3 bg-white text-black text-[10px] px-2 py-0.5 tracking-widest shadow">
                                    On Sale.
                                </span>
                                <div className="overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80"
                                        alt="Product"
                                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="mt-4 text-sm text-gray-800">Pink Premium Ceramic</h4>
                                <p className="text-sm text-red-500 mt-1">$50.00 USD</p>
                                <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">Product Card</p>
                            </div>

                            {/* Blog card */}
                            <div className="bg-white border border-gray-100 shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
                                    alt="Blog"
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-5">
                                    <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">Coffee · 5 min read</p>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Health Check: why do I get a headache?</h4>
                                    <a href="#" className="text-xs underline text-gray-500 hover:text-black">Read the Full Story →</a>
                                </div>
                                <p className="text-xs text-gray-400 px-5 pb-3 tracking-widest uppercase">Blog Card</p>
                            </div>

                            {/* Team card */}
                            <div className="text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                                    alt="Team"
                                    className="w-full h-52 object-cover"
                                />
                                <h4 className="mt-4 text-sm font-semibold text-gray-800">Fred Gleason</h4>
                                <p className="text-xs tracking-widest text-gray-400 uppercase mt-1">Head Barista</p>
                                <p className="text-xs text-gray-400 mt-1 tracking-widest uppercase">Team Card</p>
                            </div>

                        </div>
                    </div>
                )}

                {/* BADGES */}
                {tab === "Badges" && (
                    <div>
                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-8">— Badges & Tags —</h3>
                        <div className="flex flex-wrap gap-3 mb-10">
                            <span className="bg-black text-white text-xs px-3 py-1 tracking-widest">On Sale.</span>
                            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">In Stock</span>
                            <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">Out of Stock</span>
                            <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">New Arrival</span>
                            <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">Premium</span>
                            <span className="border border-gray-300 text-gray-600 text-xs px-3 py-1">Featured</span>
                            <span className="bg-gray-800 text-white text-xs px-3 py-1 tracking-widest">Limited Edition</span>
                        </div>

                        <h3 className="text-xs tracking-widest text-gray-400 uppercase mb-6">— Category Tags —</h3>
                        <div className="flex flex-wrap gap-2">
                            {["All Products", "Coffee Mugs", "Tea Mugs", "Premium", "Others", "Barista", "Lifestyle"].map((tag) => (
                                <span
                                    key={tag}
                                    className="border border-gray-200 text-gray-600 text-xs px-4 py-1.5 tracking-widest uppercase hover:border-black hover:text-black cursor-pointer transition"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

            </main>

            {/* ── Footer ── */}
            <footer className="bg-[#0a0f2c] text-white py-16 mt-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                    <div>
                        <h4 className="font-semibold mb-4 tracking-wide">CoffeeStyle.</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Delivering the best coffee life since 1996.<br />From coffee geeks to the real ones.
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
                    </div>
                </div>
                <p className="text-center text-gray-600 text-xs mt-12">CoffeeStyle Inc. © 1996</p>
            </footer>

        </div>
    );
}
