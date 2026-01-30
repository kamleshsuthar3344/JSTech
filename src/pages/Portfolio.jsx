import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Layout, Smartphone, Globe } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Portfolio() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web Application', 'E-commerce', 'Corporate', 'Real Estate'];

    // Projects fetch from kamleshsuthar.vercel.app
    const projects = [
        {
            id: 1,
            title: "Earningsharthi",
            category: "Web Application",
            image: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            desc: "A comprehensive earnings management platform.",
            link: "https://earningsharthi.in/"
        },
        {
            id: 2,
            title: "KP Realtors Group",
            category: "Real Estate",
            image: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
            desc: "Real estate listing and management website.",
            link: "https://kprealtorsgroup.com/"
        },
        {
            id: 3,
            title: "Akashdeep Hotel",
            category: "Corporate",
            image: "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
            desc: "Hotel booking and information portal.",
            link: "http://akashdeephotel.com/"
        },
        {
            id: 4,
            title: "SS Knitwears",
            category: "E-commerce",
            image: "linear-gradient(135deg, #831843 0%, #be185d 100%)",
            desc: "E-commerce platform for knitwear products.",
            link: "https://ssknitwears.com/"
        },
        {
            id: 5,
            title: "The Nivy",
            category: "Corporate",
            image: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
            desc: "Corporate portfolio for The Nivy.",
            link: "https://thenivy.com/"
        },
        {
            id: 6,
            title: "Care The Nivy",
            category: "Web Application",
            image: "linear-gradient(135deg, #14532d 0%, #166534 100%)",
            desc: "Healthcare support and management system.",
            link: "https://care.thenivy.com/"
        },
        {
            id: 7,
            title: "Mahareave",
            category: "Web Application",
            image: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)",
            desc: "Dynamic web application for Mahareave.",
            link: "https://mahareave.com/"
        },
        {
            id: 8,
            title: "Globe Communication UK",
            category: "Corporate",
            image: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)",
            desc: "Corporate website for a UK communication firm.",
            link: "https://globecommunicationuk.com/"
        },
        {
            id: 9,
            title: "Vishwakarma Trading",
            category: "E-commerce",
            image: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
            desc: "Internal trading management system.",
            link: "#"
        },
        {
            id: 10,
            title: "Go Bhart Dharsan",
            category: "Web Application",
            image: "linear-gradient(135deg, #be123c 0%, #9f1239 100%)",
            desc: "Travel verification and booking platform.",
            link: "#"
        },
        {
            id: 11,
            title: "Growth Service",
            category: "Web Application",
            image: "linear-gradient(135deg, #0369a1 0%, #075985 100%)",
            desc: "Marketing growth analytics dashboard.",
            link: "#"
        }
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Masterpieces</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Transforming ideas into exceptional digital experiences.
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
                        <div key={project.id} className="group overflow-hidden rounded-2xl glass-card border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            {/* Gradient Placeholder / Image */}
                            <div
                                className="h-56 w-full flex items-center justify-center relative overflow-hidden shrink-0"
                                style={{ background: project.image }}
                            >
                                <Layout className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>

                            {/* Content Below */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-2 min-h-[40px] flex-1">{project.desc}</p>

                                <div className="pt-4 border-t border-slate-800 mt-auto">
                                    {project.link !== "#" ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors text-sm"
                                        >
                                            View Project <ExternalLink className="w-4 h-4" />
                                        </a>
                                    ) : (
                                        <span className="text-slate-600 text-sm flex items-center gap-2">
                                            <Globe className="w-4 h-4" /> Internal
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
