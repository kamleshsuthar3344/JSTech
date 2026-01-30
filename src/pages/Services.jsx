import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout, Smartphone, PenTool, ShoppingCart, Database, TrendingUp, CheckCircle, Code, Server, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Services() {
    const services = [
        {
            id: "web-dev",
            icon: <Code className="w-10 h-10 text-blue-500" />,
            title: "Web Development",
            desc: "Custom websites built with modern technologies like React, Next.js, and Node.js.",
            features: ["SPA Development", "Progressive Web Apps", "Performance Optimization", "SEO Friendly"]
        },
        {
            id: "ui-ux",
            icon: <PenTool className="w-10 h-10 text-purple-500" />,
            title: "UI/UX Design",
            desc: "Intuitive and beautiful user interfaces that provide an exceptional user experience.",
            features: ["Wireframing", "Prototyping", "User Research", "Visual Design"]
        },
        {
            id: "app-dev",
            icon: <Smartphone className="w-10 h-10 text-pink-500" />,
            title: "App Development",
            desc: "Responsive and cross-platform mobile applications for every device.",
            features: ["Cross-platform (Flutter)", "Native Performance", "Mobile First approach", "iOS & Android"]
        },
        {
            id: "wordpress",
            icon: <Layout className="w-10 h-10 text-orange-500" />,
            title: "WordPress Solutions",
            desc: "Custom WordPress themes, plugins, and e-commerce stores tailored to your needs.",
            features: ["Theme Customization", "Plugin Development", "WooCommerce", "Easy Maintenance"]
        },
        {
            id: "backend",
            icon: <Server className="w-10 h-10 text-green-500" />,
            title: "Backend Development",
            desc: "Robust API development and database management for scalable applications.",
            features: ["REST APIs", "GraphQL", "Database Design", "Secure Architecture"]
        },
        {
            id: "digital-growth",
            icon: <TrendingUp className="w-10 h-10 text-indigo-500" />,
            title: "Digital Growth",
            desc: "Optimizing your digital presence for maximum impact and conversion.",
            features: ["SEO Strategies", "Analytics & Tracking", "Conversion Optimization", "Brand Strategy"]
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <Helmet>
                <title>Premium Services | JS_Tech Business Solutions</title>
            </Helmet>

            {/* Hero */}
            <section className="py-16">
                <div className="container text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Premium Services <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tailored for Growth</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to elevate your business. We deliver excellence in every pixel and line of code.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="container py-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="glass-card p-8 border border-slate-700/50 hover:border-primary/50 transition-all hover:-translate-y-2 duration-300">
                            <div className="mb-6 p-4 bg-slate-800/80 rounded-2xl inline-block shadow-lg">{service.icon}</div>
                            <h2 className="text-2xl font-bold mb-4 text-white">{service.title}</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed h-24">
                                {service.desc}
                            </p>
                            <div className="space-y-3 mb-8">
                                {service.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <Button to="/contact" variant="outline" className="w-full justify-center hover:bg-primary hover:border-primary">
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container py-20">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Idea?</h2>
                        <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                            Let's discuss how our premium services can help your business reach new heights.
                        </p>
                        <Button to="/contact" variant="outline" className="bg-white text-primary border-none hover:bg-slate-100 h-12 px-8">
                            Start Your Project
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
