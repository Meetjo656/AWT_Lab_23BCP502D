import React from "react";

const team = [
    {
        name: "Fred Gleason",
        role: "Head Barista",
        bio: "Fred has been crafting coffee experiences for over 15 years, from small-batch roasts to award-winning espresso blends.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
        name: "Isabel Hamill",
        role: "Creative Director",
        bio: "Isabel shapes the visual identity of CoffeeStyle — from product photography to our signature packaging design.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
        name: "Maurice Herman",
        role: "Product Curator",
        bio: "Maurice scours the globe for the finest ceramic artisans and coffee accessories to fill our collection.",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
];

const milestones = [
    { year: "1996", label: "Founded", desc: "CoffeeStyle opens its first boutique in London." },
    { year: "2004", label: "First Online Store", desc: "We brought the coffee lifestyle to the web." },
    { year: "2011", label: "Global Shipping", desc: "Now delivering to 40+ countries worldwide." },
    { year: "2018", label: "Artisan Collection", desc: "Launched our premium hand-crafted ceramics line." },
    { year: "2024", label: "100k+ Customers", desc: "Over 100,000 coffee lovers served." },
];

export default function About() {
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
                        <a href="/about" className="text-black font-semibold border-b-2 border-black pb-0.5">ABOUT</a>
                        <a href="/contact" className="hover:text-black">CONTACT</a>
                        <a href="/styleguide" className="hover:text-black">STYLEGUIDE</a>
                    </nav>
                    <div className="text-sm text-gray-600 font-medium">CART (0)</div>
                </div>
            </header>

            {/* ── Hero Banner ── */}
            <section className="bg-[#0a0f2c] text-white py-24 text-center">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Our story</p>
                <h2 className="text-5xl font-semibold">About</h2>
                <p className="text-gray-300 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
            </section>

            {/* ── Mission Statement ── */}
            <section className="max-w-3xl mx-auto px-6 py-20 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Overlaid the jeepers uselessly much excluding everyday life.
                </h3>
                <p className="text-gray-500 leading-8 mb-6">
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the
                    all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life.
                    One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far
                    World of Grammar.
                </p>
                <p className="text-gray-500 leading-8">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                </p>
            </section>

            {/* ── Two-column values ── */}
            <section className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <img
                        src="https://images.unsplash.com/photo-1521302200778-33500795e128?w=800&q=80"
                        alt="Coffee roasting"
                        className="w-full h-96 object-cover"
                    />
                    <div>
                        <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Our values</p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                            Overlaid the jeepers uselessly much excluding everyday life.
                        </h3>
                        <p className="text-gray-500 text-sm leading-7 mb-4">
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            Even the all-powerful Pointing has no control about the blind texts.
                        </p>
                        <p className="text-gray-500 text-sm leading-7">
                            It is an almost unorthographic life. One day however a small line of blind text by the name
                            of Lorem Ipsum decided to leave for the far World of Grammar.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Milestones ── */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">— Our Journey —</p>
                    <h3 className="text-2xl font-semibold text-gray-800">Since 1996</h3>
                </div>
                <div className="relative border-l-2 border-gray-200 ml-6 space-y-10">
                    {milestones.map((m) => (
                        <div key={m.year} className="pl-8 relative">
                            <span className="absolute -left-3.5 top-1 w-6 h-6 bg-[#0a0f2c] rounded-full flex items-center justify-center">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                            </span>
                            <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">{m.year} — {m.label}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Team ── */}
            <section className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">— The People —</p>
                        <h3 className="text-2xl font-semibold text-gray-800">Meet Our Team</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {team.map((member) => (
                            <div key={member.name} className="text-center group">
                                <div className="overflow-hidden mb-5">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-gray-800 font-semibold">{member.name}</h4>
                                <p className="text-xs tracking-widest text-gray-400 uppercase mt-1 mb-3">{member.role}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Quote Banner ── */}
            <section className="bg-[#0a0f2c] text-white py-20 text-center px-6">
                <p className="text-2xl font-light max-w-2xl mx-auto leading-relaxed italic text-gray-200">
                    "It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
                </p>
                <p className="mt-6 text-gray-400 text-sm tracking-widest uppercase">— CoffeeStyle Manifesto</p>
            </section>

            {/* ── Footer ── */}
            <footer className="bg-[#0a0f2c] text-white py-16 border-t border-white/10">
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
