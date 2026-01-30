import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [filter, setFilter] = useState('All');

    const posts = [
        {
            id: 1,
            title: "The Future of SEO in 2025: AI & Voice Search",
            excerpt: "How Artificial Intelligence and smart speakers are reshaping the search engine landscape for brands.",
            date: "Jan 28, 2025",
            author: "Kamlesh Suthar",
            category: "SEO"
        },
        {
            id: 2,
            title: "Maximizing ROI with Facebook & Instagram Ads",
            excerpt: "Proven strategies to lower CPC and increase conversion rates on Meta's advertising platforms.",
            date: "Jan 25, 2025",
            author: "Kamlesh Suthar",
            category: "Marketing"
        },
        {
            id: 3,
            title: "Why Your Business Needs a Progressive Web App (PWA)",
            excerpt: "Discover the benefits of PWAs: offline access, push notifications, and app-like performance.",
            date: "Jan 20, 2025",
            author: "Dev Team",
            category: "Development"
        },
        {
            id: 4,
            title: "Top 5 Web Design Trends for 2025",
            excerpt: "From glassmorphism to neobrutalism: what's hot and what's not in modern web design.",
            date: "Jan 15, 2025",
            author: "Design Lead",
            category: "Design"
        },
        {
            id: 5,
            title: "Content Marketing 101: Building Authority",
            excerpt: "How to create a content machine that drives organic traffic and builds trust for years to come.",
            date: "Jan 10, 2025",
            author: "Kamlesh Suthar",
            category: "Content"
        },
        {
            id: 6,
            title: "E-commerce Growth Hacks for Startups",
            excerpt: "Simple yet effective tactics to boost your online store sales without breaking the bank.",
            date: "Jan 05, 2025",
            author: "Marketing Team",
            category: "E-commerce"
        },
        {
            id: 7,
            title: "The Importance of Website Speed Optimization",
            excerpt: "Why page load time matters for SEO and user experience, and how to fix it.",
            date: "Dec 28, 2024",
            author: "Dev Team",
            category: "Development"
        },
        {
            id: 8,
            title: "Local SEO: Dominating Your City Search",
            excerpt: "A step-by-step guide to ranking your business in Google Maps and local search results.",
            date: "Dec 15, 2024",
            author: "Kamlesh Suthar",
            category: "SEO"
        }
    ];

    const categories = ['All', 'SEO', 'Marketing', 'Development', 'Design', 'E-commerce'];

    const filteredPosts = filter === 'All'
        ? posts
        : posts.filter(post => post.category === filter);

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>Blog & Insights | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Expert tips, industry trends, and company updates to keep you ahead of the curve.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 text-sm rounded-full transition-all border ${filter === cat
                                    ? 'bg-primary border-primary text-white'
                                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-primary hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredPosts.map((post) => (
                        <article key={post.id} className="glass-card flex flex-col hover:border-primary/50 transition-all duration-300 group">
                            <div className="p-8 flex-1">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 uppercase tracking-wider font-bold">
                                    <span className="text-primary flex items-center gap-1"><Tag className="w-3 h-3" /> {post.category}</span>
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                                    <Link to="#">{post.title}</Link>
                                </h2>
                                <p className="text-slate-400 mb-6 line-clamp-3">{post.excerpt}</p>
                            </div>
                            <div className="p-8 pt-0 mt-auto border-t border-slate-800/50 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <User className="w-4 h-4 text-slate-600" />
                                    <span>{post.author}</span>
                                </div>
                                <Link to="#" className="text-white font-medium hover:text-primary flex items-center gap-2 transition-colors">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
