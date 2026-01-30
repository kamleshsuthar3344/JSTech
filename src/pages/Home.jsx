import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, CheckCircle, Layout, Search, Smartphone, Globe, Shield, Users, Clock, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';
import TrustBadges from '../components/ui/TrustBadges';
import ServiceModal from '../components/ui/ServiceModal';
import { Link } from 'react-router-dom';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const openModal = (serviceName) => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };

    return (
        <div className="pt-[72px]">
            <Helmet>
                <title>JS_Tech | Digital Marketing & Web Development in India</title>
                <meta name="description" content="Earningsharthi - Professional digital marketing, web development, and branding services. Transform your online presence with our expert solutions." />
            </Helmet>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService={selectedService}
            />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                {/* Neon Glow Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left animate-fade-in">
                            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-primary px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                #1 Digital Agency in Uttarakhand
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                                Transform Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Future</span>
                            </h1>

                            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Professional digital marketing, web development, and branding services. We craft high-performance websites and strategies that turn visitors into loyal customers.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button to="/contact" variant="primary" className="h-12 px-8 text-lg">
                                    Get Free Consultation <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Button to="/portfolio" variant="outline" className="h-12 px-8 text-lg">
                                    View Our Work
                                </Button>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                                <TrustBadges />
                                <p className="text-sm font-medium text-slate-500">Trusted by 500+ Businesses</p>
                            </div>
                        </div>

                        <div className="relative animate-fade-in lg:block hidden">
                            <div className="glass-card p-2 relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-primary/10 border-slate-700">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Digital Growth Dashboard"
                                    className="rounded-xl opacity-90 w-full h-auto"
                                />
                                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce bg-slate-900/90 border-slate-700" style={{ animationDuration: '3s' }}>
                                    <div className="bg-emerald-500/20 p-2 rounded-full text-emerald-400">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-semibold">Growth</p>
                                        <p className="text-lg font-bold text-white">+320%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-slate-800 bg-slate-900/50">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatItem number="350+" label="Projects Delivered" />
                        <StatItem number="99%" label="Client Satisfaction" />
                        <StatItem number="50+" label="Team Members" />
                        <StatItem number="24/7" label="Active Support" />
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-24 relative">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
                        <p className="text-xl text-slate-400">
                            Comprehensive solutions to elevate your brand in the digital landscape.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<Layout className="w-8 h-8 text-blue-400" />}
                            title="Web Development"
                            desc="Custom, high-speed websites built with React & Next.js. We build scalable solutions."
                            features={["E-commerce", "Corporate Sites", "Web Apps"]}
                            onEnquire={() => openModal("Web Development")}
                        />
                        <ServiceCard
                            icon={<Search className="w-8 h-8 text-purple-400" />}
                            title="Digital Marketing"
                            desc="Data-driven SEO and social media strategies to increase your visibility and ROI."
                            features={["SEO", "Social Media", "PPC Ads"]}
                            onEnquire={() => openModal("Digital Marketing")}
                        />
                        <ServiceCard
                            icon={<Smartphone className="w-8 h-8 text-pink-400" />}
                            title="App Development"
                            desc="Native and cross-platform mobile apps that provide seamless user experiences."
                            features={["iOS & Android", "Flutter", "React Native"]}
                            onEnquire={() => openModal("App Development")}
                        />
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-flex items-center text-primary font-bold hover:text-white transition-colors">
                            View All Services <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 bg-slate-900/30">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
                        <p className="text-xl text-slate-400">
                            Our streamlined process ensures transparency and quality delivery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <ProcessStep
                            number="01"
                            title="Discovery"
                            desc="We analyze your requirements and understand your business goals."
                        />
                        <ProcessStep
                            number="02"
                            title="Strategy"
                            desc="We create a tailored roadmap and design a solution that fits your needs."
                        />
                        <ProcessStep
                            number="03"
                            title="Development"
                            desc="Our experts build your solution using cutting-edge technologies."
                        />
                        <ProcessStep
                            number="04"
                            title="Launch"
                            desc="We deploy your project and provide ongoing support for growth."
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose JS_Tech?</h2>
                            <p className="text-lg text-slate-400 mb-8">
                                We don't just build websites; we build digital assets that work for you. Our team of experts is dedicated to your growth.
                            </p>

                            <div className="space-y-6">
                                <FeatureItem
                                    icon={<Shield className="w-6 h-6 text-emerald-400" />}
                                    title="Proven Track Record"
                                    desc="Over 350+ successful projects across various industries."
                                />
                                <FeatureItem
                                    icon={<Users className="w-6 h-6 text-blue-400" />}
                                    title="Expert Team"
                                    desc="Skilled developers and marketers with years of experience."
                                />
                                <FeatureItem
                                    icon={<Globe className="w-6 h-6 text-purple-400" />}
                                    title="Global Standards"
                                    desc="World-class code quality and design aesthetics."
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team collaboration"
                                className="relative z-10 rounded-2xl shadow-2xl glass-card border border-slate-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-900/50">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-slate-400">
                            Everything you need to know about our services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem
                            question="How long does it take to build a website?"
                            answer="A standard 5-page business website typically takes 7-10 days. More complex e-commerce or custom web applications can take 3-6 weeks depending on requirements."
                        />
                        <FAQItem
                            question="Do you provide SEO services?"
                            answer="Yes! All our websites are built with basic SEO. We also offer advanced monthly SEO packages to help you rank higher on Google and drive organic traffic."
                        />
                        <FAQItem
                            question="What is your payment structure?"
                            answer="We work on a milestone basis. Typically 50% advance to start the project, and the remaining 50% upon completion and your satisfaction before final handover."
                        />
                        <FAQItem
                            question="Will my website be mobile-friendly?"
                            answer="Absolutely. We follow a 'Mobile-First' approach, ensuring your website looks and functions perfectly on smartphones, tablets, and desktops."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Scale Your Business?</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Join hundreds of successful businesses that trust JS_Tech (Earningsharthi) for their digital transformation.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button to="/contact" variant="primary" className="h-14 px-10 text-lg">
                            Book Free Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function StatItem({ number, label }) {
    return (
        <div className="text-center group">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 group-hover:scale-110 transition-transform">{number}</div>
            <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{label}</div>
        </div>
    );
}

function ServiceCard({ icon, title, desc, features, onEnquire }) {
    return (
        <div className="glass-card p-8 hover:bg-slate-800/50 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 group flex flex-col">
            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                {desc}
            </p>
            <ul className="space-y-2 mb-8">
                {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-400">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {f}
                    </li>
                ))}
            </ul>
            <button
                onClick={onEnquire}
                className="w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300"
            >
                Enquire Now
            </button>
        </div>
    )
}

function FeatureItem({ icon, title, desc }) {
    return (
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-slate-400">{desc}</p>
            </div>
        </div>
    );
}

function ProcessStep({ number, title, desc }) {
    return (
        <div className="relative p-6 glass-card rounded-2xl hover:border-primary/50 transition-colors group">
            <div className="text-4xl font-black text-slate-800 absolute top-4 right-4 group-hover:text-slate-700 transition-colors select-none">{number}</div>
            <h3 className="text-xl font-bold mb-3 text-white relative z-10">{title}</h3>
            <p className="text-slate-400 relative z-10 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-800 rounded-xl overflow-hidden glass-card transition-all">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-white hover:bg-slate-800/50 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}
            >
                <div className="p-5 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                    {answer}
                </div>
            </div>
        </div>
    );
}
