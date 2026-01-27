import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! We'll be in touch shortly.");
    };

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>Contact Us | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Magic</h1>
                    <p className="text-xl text-slate-400">
                        Got a project in mind? We'd love to hear about it.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <ContactItem icon={<Mail className="text-primary" />} label="Email" value="hello@js-tech.com" />
                                <ContactItem icon={<Phone className="text-primary" />} label="Phone" value="+1 (555) 123-4567" />
                                <ContactItem icon={<MapPin className="text-primary" />} label="Office" value="123 Innovation Dr, Tech City, TC 90210" />
                            </div>
                        </div>

                        <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                            <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-center gap-2">✓ Custom tailored strategies</li>
                                <li className="flex items-center gap-2">✓ 24/7 dedicated support</li>
                                <li className="flex items-center gap-2">✓ Transparent reporting</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="glass-card p-8">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputGroup label="First Name" placeholder="John" />
                                <InputGroup label="Last Name" placeholder="Doe" />
                            </div>
                            <InputGroup label="Email" type="email" placeholder="john@example.com" />
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Service Interested In</label>
                                <select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors">
                                    <option>Web Design</option>
                                    <option>SEO & Marketing</option>
                                    <option>Branding</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <Button type="submit" variant="primary" className="w-full mt-4">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function ContactItem({ icon, label, value }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-800 rounded-lg">{icon}</div>
            <div>
                <p className="text-sm text-slate-400 mb-1">{label}</p>
                <p className="font-medium text-lg">{value}</p>
            </div>
        </div>
    );
}

function InputGroup({ label, type = "text", placeholder }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">{label}</label>
            <input
                type={type}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                placeholder={placeholder}
            />
        </div>
    );
}
