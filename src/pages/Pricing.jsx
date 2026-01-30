import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PricingCard from '../components/ui/PricingCard';

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('web');

    const pricingData = {
        web: [
            {
                plan: "Startup Web",
                price: "9,999",
                features: ["5 Page Responsive Website", "1 Year Hosting & Domain", "Contact Form Integration", "Basic SEO Setup", "1 Month Support"]
            },
            {
                plan: "Business Pro",
                price: "19,999",
                recommended: true,
                features: ["10-15 Pages Custom Design", "CMS Integration (WordPress/Next.js)", "Speed Optimization", "Google My Business Setup", "WhatsApp Chat Integration", "3 Months Support"]
            },
            {
                plan: "E-Commerce",
                price: "34,999",
                features: ["Unlimited Products", "Payment Gateway Integration", "User Dashboard & Login", "Inventory Management", "Admin Panel", "6 Months Support"]
            }
        ],
        marketing: [
            {
                plan: "Social Starter",
                price: "7,999",
                features: ["Social Media Management (2 Platforms)", "12 Creative Posts/Month", "Basic Ad Setup", "Community Engagement", "Monthly Report"]
            },
            {
                plan: "Growth Marketer",
                price: "15,999",
                recommended: true,
                features: ["Management (FB, Insta, LinkedIn)", "20 Posts + 4 Reels/Month", "Advanced Ad Campaigns", "Influencer Outreach", "Lead Generation Strategy", "Bi-Weekly Reporting"]
            },
            {
                plan: "Brand Domination",
                price: "29,999",
                features: ["All Platforms Managed", "Daily Content Posting", "Video Production", "PPC Management (Google Ads)", "Retargeting Campaigns", "Weekly Strategy Calls"]
            }
        ],
        seo: [
            {
                plan: "Local SEO",
                price: "4,999",
                features: ["Google My Business Optimization", "Local Keyword Research", "50 Directory Citations", "On-Page SEO", "Monthly Ranking Report"]
            },
            {
                plan: "National Reach",
                price: "12,999",
                recommended: true,
                features: ["National Keyword Strategy", "Technical SEO Audit", "Content Optimization", "High-Quality Backlinks (5/mo)", "Competitor Analysis", "Detailed Analytics"]
            },
            {
                plan: "Global Enterprise",
                price: "24,999",
                features: ["International SEO", "Multi-Language Support", "Advanced Link Building (15/mo)", "Schema Markup & Core Vitals", "Custom Content Strategy", "Dedicated Account Manager"]
            }
        ]
    };

    return (
        <div className="pt-32 pb-20">
            <Helmet>
                <title>Pricing Plans | JS_Tech Business Solutions</title>
            </Helmet>

            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
                    <p className="text-xl text-slate-400">
                        Choose the clear, upfront package that suites your business stage. No hidden fees.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {[
                        { id: 'web', label: 'Web Development' },
                        { id: 'marketing', label: 'Digital Marketing' },
                        { id: 'seo', label: 'SEO Services' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center animate-fade-in">
                    {pricingData[activeTab].map((item, index) => (
                        <PricingCard
                            key={index}
                            plan={item.plan}
                            price={item.price}
                            features={item.features}
                            recommended={item.recommended}
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-500 mb-4">Need a custom enterprise solution?</p>
                    <a href="/contact" className="text-primary font-bold hover:underline">Contact our sales team</a>
                </div>
            </div>
        </div>
    );
}
