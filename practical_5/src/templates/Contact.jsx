import React, { useState } from "react";

const locations = [
    {
        city: "London",
        address: "Jubilee Place, London, E14 5NY",
        hours: ["Mon – Fri: 08:00 to 22:00", "Sat: 09:00 to 20:00", "Sun: 12:00 to 18:00"],
        contacts: [
            { name: "Robb Kohler", phone: "086-374-4962", email: "robb.kohler@coffeestyle.com" },
            { name: "Dayana Roob", phone: "354-341-2750", email: "roob.dayana@coffeestyle.com" },
        ],
    },
    {
        city: "Los Angeles",
        address: "9219 Old Kingston Street, South El Monte, CA 91733",
        hours: ["Mon – Wed: 09:00 to 21:00", "Thu – Sat: 09:00 to 22:00", "Sun: 10:00 to 19:00"],
        contacts: [
            { name: "Warren Marsh", phone: "531-403-0376", email: "warren.marsh@coffeestyle.com" },
        ],
    },
    {
        city: "Australia",
        address: "Pride Ave, Hamlyn Heights VIC 3215, Australia",
        hours: ["Mon – Fri: 07:00 to 20:00", "Sat – Sun: 08:00 to 17:00"],
        contacts: [
            { name: "General Enquiries", phone: "+1 (415) 555-1212", email: "us@coffeestyle.io" },
        ],
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

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
                        <a href="/contact" className="text-black font-semibold border-b-2 border-black pb-0.5">CONTACT</a>
                        <a href="/styleguide" className="hover:text-black">STYLEGUIDE</a>
                    </nav>
                    <div className="text-sm text-gray-600 font-medium">CART (0)</div>
                </div>
            </header>

            {/* ── Hero ── */}
            <section className="bg-[#0a0f2c] text-white py-24 text-center">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Reach out anytime</p>
                <h2 className="text-5xl font-semibold">Let's Connect</h2>
                <p className="text-gray-300 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
            </section>

            {/* ── Contact Form + Info ── */}
            <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">

                {/* Form */}
                <div>
                    <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">— Send a message —</p>
                    {sent && (
                        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded">
                            ✓ Message sent! We'll get back to you shortly.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-wider">Full Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm bg-transparent"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-wider">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm bg-transparent"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-wider">Subject</label>
                            <input
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="What's this about?"
                                className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm bg-transparent"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Write your message here..."
                                className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-sm bg-transparent resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-gray-800 transition mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-10">
                    <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">— Find us —</p>
                    {locations.map((loc) => (
                        <div key={loc.city} className="border-l-2 border-gray-200 pl-5">
                            <h4 className="text-sm font-semibold text-gray-800 mb-1">{loc.city}</h4>
                            <p className="text-xs text-gray-500 mb-3">{loc.address}</p>
                            <ul className="text-xs text-gray-500 space-y-0.5 mb-3">
                                {loc.hours.map((h) => <li key={h}>{h}</li>)}
                            </ul>
                            {loc.contacts.map((c) => (
                                <div key={c.name} className="text-xs text-gray-500 mb-1">
                                    <span className="font-medium text-gray-700">{c.name}</span>{" "}
                                    — {c.phone} · <a href={`mailto:${c.email}`} className="underline hover:text-black">{c.email}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Map placeholder ── */}
            <section className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-sm tracking-widest uppercase">
                [ Map — Jubilee Place, London ]
            </section>

            {/* ── Footer ── */}
            <footer className="bg-[#0a0f2c] text-white py-16">
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
