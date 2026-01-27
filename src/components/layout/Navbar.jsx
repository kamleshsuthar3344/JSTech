import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="container mx-auto">
                <nav className="glass-card flex items-center justify-between px-6 py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="JS_Tech Business Solutions" className="h-16 w-auto object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-slate-300'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Button to="/contact" variant="primary">Get Started</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 glass-card p-6 animate-fade-in absolute left-4 right-4">
                        <ul className="flex flex-col gap-4">
                            {links.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`block text-lg font-medium ${isActive(link.path) ? 'text-primary' : 'text-slate-300'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <div className="pt-4 border-t border-slate-700">
                                <Button to="/contact" variant="primary" className="w-full">Get Started</Button>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
