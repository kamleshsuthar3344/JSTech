import React, { useState, useEffect } from 'react';
import { X, Send, Smartphone } from 'lucide-react';
import Button from './Button';

export default function ServiceModal({ isOpen, onClose, defaultService }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        if (isOpen && defaultService) {
            setFormData(prev => ({ ...prev, service: defaultService }));
        }
    }, [isOpen, defaultService]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hi, I'm interested in ${formData.service}. My name is ${formData.name}. Phone: ${formData.phone}. \n\nMessage: ${formData.message}`;
        const url = `https://wa.me/917665960093?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Enquire Now</h2>
                    <p className="text-slate-400 text-sm">Get a quote for your project on WhatsApp</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Service</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                        >
                            <option value="">Select a Service</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="SEO Optimization">SEO Optimization</option>
                            <option value="PPC Advertising">PPC Advertising</option>
                            <option value="Branding">Branding</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Message (Optional)</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Tell us about your requirements..."
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors resize-none"
                        ></textarea>
                    </div>

                    <Button type="submit" variant="primary" className="w-full justify-center h-12 mt-2">
                        Send on WhatsApp <Send className="w-4 h-4 ml-2" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
