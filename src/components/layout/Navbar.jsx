import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'Web Development', path: '/services#web-dev' },
                { name: 'SEO Optimization', path: '/services#seo' },
                { name: 'Digital Marketing', path: '/services#marketing' },
            ]
        },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Blog', path: '/blog' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="JS_Tech Business Solutions" className="h-16 w-auto object-contain brightness-100" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.name} className="relative group">
                            <Link
                                to={link.path}
                                className={`text-sm font-semibold flex items-center gap-1 transition-colors ${isActive(link.path) ? 'text-primary' : 'text-slate-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>

                            {/* Dropdown - Dark Mode */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-left overflow-hidden">
                                    {link.dropdown.map(drop => (
                                        <Link
                                            key={drop.name}
                                            to={drop.path}
                                            className="block px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-primary transition-colors border-b border-slate-800 last:border-none"
                                        >
                                            {drop.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden lg:flex gap-4">
                    <Button to="/contact" variant="primary" className="shadow-lg shadow-primary/25">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu - Dark Mode */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl p-4">
                    <ul className="flex flex-col gap-2">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="block p-3 text-lg font-medium text-slate-300 hover:bg-slate-800 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <div className="mt-4 pt-4 border-t border-slate-800">
                            <Button to="/contact" variant="primary" className="w-full justify-center">Get Started</Button>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
}
