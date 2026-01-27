import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = [
        {
            id: 1,
            title: "The Future of SEO in 2025",
            excerpt: "How AI and voice search are reshaping the search engine landscape for brands.",
            date: "Jan 12, 2025",
            author: "Sarah Smith",
            category: "SEO"
        },
        {
            id: 2,
            title: "Maximizing ROI with Social Ads",
            excerpt: "Strategies to lower CPC and increase conversion rates on Facebook and Instagram.",
            date: "Jan 08, 2025",
            author: "Mike Johnson",
            category: "Marketing"
        },
        {
            id: 3,
            title: "Web Design Trends to Watch",
            excerpt: "From glassmorphism to neobrutalism: what's hot in web design right now.",
            date: "Dec 28, 2024",
            author: "Alex Lee",
            category: "Design"
        },
        {
            id: 4,
            title: "Content Marketing 101",
            excerpt: "Building a content machine that drives organic traffic for years to come.",
            date: "Dec 15, 2024",
            author: "Sarah Smith",
            category: "Content"
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>Blog | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights</h1>
                    <p className="text-xl text-slate-400">
                        Expert tips, industry trends, and company updates.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {posts.map((post) => (
                        <article key={post.id} className="glass-card flex flex-col hover:border-primary transition-colors">
                            <div className="p-8 flex-1">
                                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                                    <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                                    <Link to="#">{post.title}</Link>
                                </h2>
                                <p className="text-slate-400 mb-6">{post.excerpt}</p>
                            </div>
                            <div className="p-8 pt-0 mt-auto border-t border-slate-800/50 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                    <User className="w-4 h-4" />
                                    <span>{post.author}</span>
                                </div>
                                <Link to="#" className="text-primary font-medium hover:text-white flex items-center gap-1 transition-colors">
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
