import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img src="/logo.png" alt="JS_Tech Business Solutions" className="h-[4.25rem] w-auto object-contain" />
                        </Link>
                        <p className="text-slate-400 mb-6">
                            Elevating brands through digital innovation. We build experiences that matter.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Twitter size={20} />} />
                            <SocialIcon icon={<Linkedin size={20} />} />
                            <SocialIcon icon={<Instagram size={20} />} />
                            <SocialIcon icon={<Facebook size={20} />} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Our Work</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link to="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Social Media</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Content Strategy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
                            />
                            <button className="bg-primary px-4 py-2 rounded-lg text-white font-medium hover:bg-primary/90 transition-colors">
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} JS_Tech Business Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
            {icon}
        </a>
    );
}
