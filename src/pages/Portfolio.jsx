import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Portfolio() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web Design', 'Branding', 'Marketing'];

    const projects = [
        {
            id: 1,
            title: "Neon FinTech",
            category: "Web Design",
            image: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            desc: "Complete UI/UX overhaul for a banking app."
        },
        {
            id: 2,
            title: "EcoGreen Energy",
            category: "Branding",
            image: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
            desc: "Brand identity and eco-friendly messaging."
        },
        {
            id: 3,
            title: "Urban Coffee",
            category: "Marketing",
            image: "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
            desc: "Social media campaign increasing footfall by 40%."
        },
        {
            id: 4,
            title: "TechFlow SaaS",
            category: "Web Design",
            image: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
            desc: "High-conversion landing page for B2B software."
        },
        {
            id: 5,
            title: "Pixel Art Gallery",
            category: "Branding",
            image: "linear-gradient(135deg, #831843 0%, #be185d 100%)",
            desc: "Visual identity for a digital art marketplace."
        },
        {
            id: 6,
            title: "Fitness Pro",
            category: "Marketing",
            image: "linear-gradient(135deg, #14532d 0%, #166534 100%)",
            desc: "Influencer marketing strategy for gym equipment."
        },
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>Portfolio | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        A showcase of our best campaigns, designs, and strategies.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full transition-all ${filter === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'text-slate-400 hover:text-white bg-slate-800/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl glass-card">
                            {/* Image Placeholder */}
                            <div
                                className="h-64 w-full transition-transform duration-500 group-hover:scale-110"
                                style={{ background: project.image }}
                            ></div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-6">
                                <span className="text-primary font-bold text-sm mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                <p className="text-slate-300 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.desc}</p>
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                                        View Case Study <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-slate-500">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}
