import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, PenTool, Share2, Mail, Layout, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Services() {
    const services = [
        {
            icon: <Search className="w-8 h-8 text-blue-400" />,
            title: "SEO Optimization",
            desc: "Rank higher on Google and drive organic traffic with our data-backed SEO strategies.",
        },
        {
            icon: <Share2 className="w-8 h-8 text-pink-500" />,
            title: "Social Media Marketing",
            desc: "Engage your audience on Instagram, LinkedIn, and Twitter with viral content.",
        },
        {
            icon: <Layout className="w-8 h-8 text-purple-500" />,
            title: "Web Design & Dev",
            desc: "Stunning, fast, and responsive websites that convert visitors into customers.",
        },
        {
            icon: <Mail className="w-8 h-8 text-yellow-500" />,
            title: "Email Marketing",
            desc: "Automated flows and newsletters that nurture leads and boost retention.",
        },
        {
            icon: <PenTool className="w-8 h-8 text-green-500" />,
            title: "Content Strategy",
            desc: "Blogs, whitepapers, and copy that establishes your brand as an authority.",
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-red-500" />,
            title: "PPC Advertising",
            desc: "Instant traffic with high-ROI campaigns on Google Ads and Facebook Ads.",
        },
    ];

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>Services | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
                    <p className="text-xl text-slate-400">
                        Comprehensive digital solutions tailored to your business goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((s, index) => (
                        <div key={index} className="glass-card p-8 group hover:bg-slate-800/80 transition-all hover:-translate-y-2">
                            <div className="mb-6 p-4 bg-slate-900/50 rounded-xl w-fit group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                            <p className="text-slate-400 mb-6">{s.desc}</p>
                            <Button to="/contact" variant="ghost" className="pl-0 text-primary">Learn More &rarr;</Button>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="glass-card p-12 text-center rounded-3xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Ready to Scale?</h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                            Let's discuss how we can help your business grow. Schedule a free consultation today.
                        </p>
                        <Button to="/contact" variant="primary" className="mx-auto">Get a Quote</Button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
                </div>
            </div>
        </div>
    );
}
