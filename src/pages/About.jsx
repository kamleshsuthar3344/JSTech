import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Shield, TrendingUp, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function About() {
    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>About Us | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                {/* Mission */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Empowering Businesses to <span className="text-primary">Grow Digital</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                            Founded in 2024, JS_Tech Business Solutions is a results-driven digital agency committed to one goal: helping your business succeed online.
                        </p>
                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                            We don't just build websites; we build digital assets that work for you 24/7. From small startups to established enterprises, we provide the technology and strategy needed to scale.
                        </p>

                        <div className="flex gap-8 mt-8">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                                <div className="text-sm text-slate-500">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">32+</div>
                                <div className="text-sm text-slate-500">Projects Delivered</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl transform rotate-3 blur opacity-50"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Team Collaboration"
                            className="relative rounded-3xl shadow-xl w-full grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Values Grid */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Target className="w-8 h-8 text-blue-500" />}
                            title="Result Oriented"
                            desc="We focus on metrics that matter: Leads, Sales, and ROI."
                        />
                        <ValueCard
                            icon={<Shield className="w-8 h-8 text-emerald-500" />}
                            title="Transparency"
                            desc="No hidden fees. Full reporting. You prefer clear communication."
                        />
                        <ValueCard
                            icon={<TrendingUp className="w-8 h-8 text-purple-500" />}
                            title="Innovation"
                            desc="We stay ahead of the curve with the latest tech and strategies."
                        />
                        <ValueCard
                            icon={<Users className="w-8 h-8 text-orange-500" />}
                            title="Client First"
                            desc="Your growth is our growth. We are partners in your journey."
                        />
                    </div>
                </div>
            </div>

            {/* Technology Expertise */}
            <section className="py-20 bg-slate-900 border-t border-slate-800">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Complete Technology Expertise</h2>
                        <p className="text-slate-400">We use the latest tech stack to build scalable solutions.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <TechCard title="Frontend" techs={['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS']} />
                        <TechCard title="Backend" techs={['Node.js', 'Python', 'PHP', 'Java']} />
                        <TechCard title="CMS" techs={['WordPress', 'Shopify', 'Webflow', 'Wix']} />
                        <TechCard title="Database & Cloud" techs={['MongoDB', 'MySQL', 'AWS', 'Firebase']} />
                    </div>
                </div>
            </section>

            {/* Global Services */}
            <section className="py-20 bg-slate-950">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Global Services for Worldwide Growth</h2>
                        <p className="text-slate-400">Expanding your business across borders with our expertise.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ServiceDetailCard
                            title="Global Website Development"
                            desc="High-performance websites tailored for international audiences with multi-language support."
                        />
                        <ServiceDetailCard
                            title="Cross-Platform Mobile Apps"
                            desc="Native-like experience on both iOS and Android using Flutter and React Native."
                        />
                        <ServiceDetailCard
                            title="Global SEO Strategy"
                            desc="Rank your business in multiple countries with our international SEO frameworks."
                        />
                        <ServiceDetailCard
                            title="Worldwide Digital Marketing"
                            desc="Run campaigns across the globe with targeted ads on Google, Facebook, and LinkedIn."
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-900">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Why Choose Us for Global Projects?</h2>
                        <p className="text-slate-400">We are the trusted partner for international brands.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard title="24/7 Service" desc="Round-the-clock support for all timezones." />
                        <FeatureCard title="Global Experience" desc="Worked with clients in 20+ countries." />
                        <FeatureCard title="Full Tech Stack" desc="Expertise in all modern web technologies." />
                        <FeatureCard title="Registered Company" desc="MSME & ISO Certified Agency." />
                        <FeatureCard title="Multiple Timezones" desc="Teams dedicated to different regions." />
                        <FeatureCard title="Secure & Compliant" desc="GDPR and international security standards." />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-slate-950 border-t border-slate-800">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">What Global Clients Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard
                            quote="JS_Tech transformed our business with their global SEO strategy. Highly recommended!"
                            author="John Smith, USA"
                        />
                        <TestimonialCard
                            quote="The best development team we have worked with. Delivered on time and within budget."
                            author="Sarah Connor, UK"
                        />
                        <TestimonialCard
                            quote="Their 24/7 support is a game changer for our international operations."
                            author="Ahmed Al-Sayed, UAE"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-white">Ready for Global Digital Solutions?</h2>
                    <div className="flex justify-center gap-4">
                        <Button to="/contact" variant="primary" className="h-14 px-10 text-lg">
                            Schedule a Call
                        </Button>
                        <Button to="/contact" variant="outline" className="h-14 px-10 text-lg">
                            Get Free Audit
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ValueCard({ icon, title, desc }) {
    return (
        <div className="p-6 glass-card border border-slate-700 hover:border-primary/50 text-center">
            <div className="mb-4 inline-flex p-3 bg-slate-800 rounded-full">{icon}</div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function TechCard({ title, techs }) {
    return (
        <div className="glass-card p-6 border border-slate-700 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
                {techs.map(t => (
                    <span key={t} className="bg-slate-800 px-3 py-1 rounded-full text-xs text-slate-300 font-medium border border-slate-700">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}

function ServiceDetailCard({ title, desc }) {
    return (
        <div className="glass-card p-8 border border-slate-700 flex items-start gap-4 hover:bg-slate-800/50 transition-colors">
            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                <TrendingUp className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{desc}</p>
            </div>
        </div>
    )
}

function FeatureCard({ title, desc }) {
    return (
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 text-center hover:border-emerald-500/50 transition-colors group">
            <div className="w-12 h-12 bg-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm">{desc}</p>
        </div>
    )
}

function TestimonialCard({ quote, author }) {
    return (
        <div className="glass-card p-8 border border-slate-700 text-left relative">
            <div className="text-4xl text-primary/30 font-serif absolute top-4 left-4">"</div>
            <p className="text-slate-300 mb-6 italic relative z-10">{quote}</p>
            <div className="font-bold text-white">{author}</div>
            <div className="text-xs text-primary">Global Client</div>
        </div>
    )
}
