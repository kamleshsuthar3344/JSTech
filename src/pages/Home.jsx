import React from 'react';
import { ArrowRight, BarChart, Globe, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <Helmet>
                <title>JS_Tech Business Solutions | Transform Your Online Presence</title>
                <meta name="description" content="Premium digital marketing agency helping brands grow." />
            </Helmet>

            {/* Hero Section */}
            <section className="container text-center mb-20">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-card text-sm text-primary font-medium animate-fade-in">
                    🚀 Elevate Your Brand Strategy
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    We Build <span className="text-primary">Digital Empires</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Stop blending in. We craft data-driven strategies and stunning designs
                    that captivate audiences and convert visitors into loyal customers.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <Button to="/contact" variant="primary">start Project <ArrowRight className="w-4 h-4" /></Button>
                    <Button to="/portfolio" variant="outline">View Our Work</Button>
                </div>
            </section>

            {/* Features/Stats Grid */}
            <section className="container mb-24">
                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<BarChart className="w-8 h-8 text-accent" />}
                        title="Data-Driven Growth"
                        desc="We don't guess. We analyze, optimize, and scale using real-time insights."
                    />
                    <FeatureCard
                        icon={<Globe className="w-8 h-8 text-secondary" />}
                        title="Global Reach"
                        desc="Expand your market beyond borders with our international SEO strategies."
                    />
                    <FeatureCard
                        icon={<Zap className="w-8 h-8 text-primary" />}
                        title="High-Velocity Design"
                        desc="Websites efficiently built for speed, aesthetics, and conversion."
                    />
                </div>
            </section>

            {/* Visual Element Placeholder (Abstract Gradient/Shape) */}
            <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-secondary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animation-delay-2000"></div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="glass-card p-8 hover:bg-slate-800/50 transition-colors">
            <div className="mb-4 bg-slate-800 p-3 rounded-xl inline-block">{icon}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-400">{desc}</p>
        </div>
    );
}
