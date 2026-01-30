import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';
import { useForm } from '../hooks/useForm';

export default function Contact() {
    const validate = (values) => {
        let errors = {};
        if (!values.firstName) errors.firstName = "First name is required";
        if (!values.email) errors.email = "Email is required";
        if (!values.phone) errors.phone = "Phone is required";
        return errors;
    };

    const submitForm = () => {
        const text = `Hi, I'm interested in ${values.service}. My name is ${values.firstName} ${values.lastName}. Email: ${values.email}. Phone: ${values.phone}. \n\nMessage: ${values.message}`;
        const url = `https://wa.me/917665960093?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        setIsSubmitting(false);
        alert("Thanks! Redirecting you to WhatsApp to send your message.");
    };

    const { values, errors, isSubmitting, handleChange, handleSubmit, setIsSubmitting } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Web Development',
        message: ''
    }, validate);

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>Contact Us | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-slate-800 text-primary px-3 py-1 text-sm font-semibold rounded-full mb-4">
                        <MessageSquare className="w-4 h-4" /> Get In Touch
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Start a Conversation</h1>
                    <p className="text-xl text-slate-400">
                        Ready to grow? We're here to help. Fill out the form or reach us directly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <div className="glass-card p-8 mb-8">
                            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                            <div className="space-y-6">
                                <a href="mailto:kamleshsuthar3344@gmail.com" className="block">
                                    <ContactItem icon={<Mail className="text-white" />} label="Email Us" value="kamleshsuthar3344@gmail.com" color="bg-blue-600" />
                                </a>
                                <a href="tel:+917665960093" className="block">
                                    <ContactItem icon={<Phone className="text-white" />} label="Call Us" value="+91 76659 60093" color="bg-green-600" />
                                </a>
                                <div className="block">
                                    <ContactItem icon={<MapPin className="text-white" />} label="Visit Us" value="Jaipur, Rajasthan" color="bg-purple-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-xl shadow-primary/20">
                            <h3 className="text-xl font-bold mb-4">Why Partner With Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                                    Custom tailored strategies for your niche
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                                    24/7 dedicated support team
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                                    Transparent weekly reporting
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(submitForm)} className="glass-card p-8">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <div className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <InputGroup
                                    label="First Name"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    error={errors.firstName}
                                    placeholder="e.g. Rahul"
                                />
                                <InputGroup
                                    label="Last Name"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    placeholder="e.g. Sharma"
                                />
                            </div>
                            <InputGroup
                                label="Email Address"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                error={errors.email}
                                placeholder="e.g. rahul@business.com"
                            />
                            <InputGroup
                                label="Phone Number"
                                type="tel"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                error={errors.phone}
                                placeholder="+91 76659 60093"
                            />

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300">Service Interested In</label>
                                <select
                                    name="service"
                                    value={values.service}
                                    onChange={handleChange}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                >
                                    <option>Web Development</option>
                                    <option>SEO & Marketing</option>
                                    <option>Branding</option>
                                    <option>E-commerce</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300">Message</label>
                                <textarea
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Tell us about your project goals..."
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="w-full justify-center mt-4 h-12 text-lg" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message Via WhatsApp'} <Send className="w-5 h-5 ml-2" />
                            </Button>
                            <p className="text-xs text-center text-slate-500 mt-4">
                                This will open WhatsApp to send your message directly.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function ContactItem({ icon, label, value, color }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className={`p-3 rounded-xl shadow-lg transition-transform group-hover:scale-110 ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                <p className="font-bold text-lg text-white group-hover:text-primary transition-colors">{value}</p>
            </div>
        </div>
    );
}

function InputGroup({ label, type = "text", placeholder, name, value, onChange, error }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full bg-slate-900 border rounded-lg p-3 text-slate-300 focus:ring-1 outline-none transition-all placeholder:text-slate-600 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-700 focus:border-primary focus:ring-primary'
                    }`}
                placeholder={placeholder}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
