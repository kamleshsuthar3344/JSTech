import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import TrustBadges from '../ui/TrustBadges';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img src="/logo.png" alt="JS_Tech Business Solutions" className="h-[4.25rem] w-auto object-contain" />
                        </Link>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            India's leading digital solutions provider. We help businesses scale with custom web development and strategic marketing.
                        </p>
                        <div className="flex gap-3">
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Facebook size={18} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Our Portfolio</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Core Services</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link to="/services" className="hover:text-primary transition-colors">Website Development</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">E-commerce Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>123 Innovation Tower, Jaipur, Rajasthan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+917665960093" className="hover:text-primary transition-colors">
                                    Sales: +91 76659 60093
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>kamleshsuthar3344@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <div className="flex justify-center mb-6">
                        <TrustBadges />
                    </div>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} <span className="font-bold text-white">JS_Tech Business Solutions</span>. All rights reserved.
                        <span className="mx-2 text-slate-700">|</span>
                        Made with <span className="text-red-500">💖</span> in India
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }) {
    return (
        <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
            {icon}
        </a>
    );
}
