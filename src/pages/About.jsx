import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target } from 'lucide-react';

export default function About() {
    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>About Us | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">We Are The <span className="text-primary">Future</span> of Marketing</h1>
                    <p className="text-xl text-slate-400">
                        Founded in 2024, JS_Tech Business Solutions was born from a simple idea: Digital marketing shouldn't be boring.
                        We combine data science with artistic expression to build brands that people actually love.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <ValueCard
                        icon={<Target className="w-10 h-10 text-accent" />}
                        title="Result Obsessed"
                        desc="We don't care about vanity metrics. We care about ROI, leads, and sales."
                    />
                    <ValueCard
                        icon={<Users className="w-10 h-10 text-secondary" />}
                        title="Client Partnership"
                        desc="We are not a vendor. We are an extension of your team."
                    />
                    <ValueCard
                        icon={<Award className="w-10 h-10 text-primary" />}
                        title="Premium Quality"
                        desc="Good enough is not enough. We strive for excellence in every pixel."
                    />
                </div>

                {/* Team Section (Placeholder) */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet The Architects</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="glass-card p-4 text-center group hover:bg-slate-800/50 transition-all">
                                <div className="w-24 h-24 mx-auto bg-slate-700 rounded-full mb-4 group-hover:scale-110 transition-transform overflow-hidden relative">
                                    {/* Avatar Placeholder Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${i % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-accent'} opacity-80`}></div>
                                </div>
                                <h3 className="font-bold text-lg">Alex Johnson</h3>
                                <p className="text-sm text-primary mb-2">Creative Director</p>
                                <p className="text-xs text-slate-400">Visionary with 10+ years in digital design.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ValueCard({ icon, title, desc }) {
    return (
        <div className="p-8 border border-slate-800 rounded-2xl hover:border-primary/50 transition-colors">
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}
